"use strict";

const prettierConfig = require("eslint-config-prettier");
const { compile } = require("./ajv");

const testConfig = (
  configName,
  { prefix = "", sourceRules, targetRules, overrideRules = {} }
) => {
  describe(`${configName}`, () => {
    const { size } = sourceRules;

    it(`has ${size} rules`, () => {
      expect.assertions(1);
      expect(Object.keys(targetRules)).toHaveLength(size);
    });

    for (const [name, { meta }] of sourceRules.entries()) {
      describe(`${name}`, () => {
        const ruleName = prefix ? `${prefix}/${name}` : name;
        const isRuleRegistered = Object.hasOwn(targetRules, ruleName);

        it("is registered", () => {
          expect.assertions(1);
          expect(isRuleRegistered).toBeTruthy();
        });

        if (!isRuleRegistered) return;

        const value = targetRules[ruleName];
        const [level, ...options] = Array.isArray(value) ? value : [value];

        it("has a valid level", () => {
          expect.assertions(1);
          expect(["off", "warn", "error"]).toContain(level);
        });

        const isRuleTurnedOff = level === "off";

        if (isRuleTurnedOff) {
          it("has no options since the rule is turned off", () => {
            expect.assertions(1);
            expect(options).toHaveLength(0);
          });
        }

        const isDeprecatedRule = meta?.deprecated;

        if (isDeprecatedRule) {
          it("is turned off since the rule is deprecated", () => {
            expect.assertions(1);
            expect(isRuleTurnedOff).toBeTruthy();
          });
        }

        const isPrettierRule = Object.hasOwn(prettierConfig.rules, ruleName);

        if (isPrettierRule) {
          it("is turned off since the rule is overridden by prettier", () => {
            expect.assertions(1);
            expect(isRuleTurnedOff).toBeTruthy();
          });
        }

        const schema = meta?.schema;

        if (options.length > 0 && schema) {
          it("has valid options", () => {
            expect.assertions(1);
            const validate = compile(schema);
            validate(options);
            expect(validate.errors).toBeFalsy();
          });
        }

        const extension = meta?.docs?.extendsBaseRule;

        if (extension) {
          const baseRule = typeof extension === "string" ? extension : name;

          it("overrides the base rule", () => {
            expect.assertions(2);
            expect(Object.hasOwn(overrideRules, baseRule)).toBeTruthy();
            expect(overrideRules[baseRule]).toBe("off");
          });
        }
      });
    }
  });
};

// eslint-disable-next-line jest/no-export -- This is a utility file.
module.exports = { testConfig };

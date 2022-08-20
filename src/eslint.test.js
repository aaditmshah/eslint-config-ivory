"use strict";

// eslint-disable-next-line import/no-unresolved -- https://github.com/import-js/eslint-plugin-import/issues/1810
const eslint = require("eslint/use-at-your-own-risk");
const { testConfig } = require("./__utils__/test");
const eslintConfig = require("./eslint");

testConfig("eslint", {
  sourceRules: eslint.builtinRules,
  targetRules: eslintConfig.rules
});

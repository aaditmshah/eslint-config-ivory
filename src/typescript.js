"use strict";

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    // Supported Rules
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-comment": ["error", { "ts-expect-error": true }],
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/class-literal-property-style": ["error", "fields"],
    "@typescript-eslint/consistent-generic-constructors": "error",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "never" }
    ],
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-floating-promises": ["error", { ignoreVoid: false }],
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implicit-any-catch": "off",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-meaningless-void-operator": [
      "error",
      { checkNever: true }
    ],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
      "error",
      { allowComparingNullableBooleansToTrue: false }
    ],
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/parameter-properties": [
      "error",
      { prefer: "parameter-property" }
    ],
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-nullish-coalescing": [
      "error",
      {
        ignoreTernaryTests: false,
        ignoreConditionalTests: false,
        ignoreMixedLogicalExpressions: false
      }
    ],
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-readonly-parameter-types": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-return-this-type": "off",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/restrict-plus-operands": [
      "error",
      { checkCompoundAssignments: true }
    ],
    "@typescript-eslint/restrict-template-expressions": "error",
    "@typescript-eslint/sort-type-union-intersection-members": "error",
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false
      }
    ],
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/unified-signatures": "error",
    // Extension Rules
    "@typescript-eslint/brace-style": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/comma-spacing": "off",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/func-call-spacing": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/init-declarations": "error",
    "@typescript-eslint/keyword-spacing": "off",
    "@typescript-eslint/lines-between-class-members": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-duplicate-imports": "off",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-invalid-this": [
      "error",
      { capIsConstructor: false }
    ],
    "@typescript-eslint/no-loop-func": "error",
    "@typescript-eslint/no-loss-of-precision": "error",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-redeclare": "error",
    "@typescript-eslint/no-restricted-imports": "off",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        builtinGlobals: true,
        ignoreOnInitialization: true
      }
    ],
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      { enforceForJSX: true }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all"
      }
    ],
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/object-curly-spacing": "off",
    "@typescript-eslint/padding-line-between-statements": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/return-await": "error",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/space-before-blocks": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/space-infix-ops": "off"
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-member-accessibility": "error",
        // Base Rules
        "brace-style": "off",
        "comma-dangle": "off",
        "comma-spacing": "off",
        "default-param-last": "off",
        "dot-notation": "off",
        "func-call-spacing": "off",
        "indent": "off",
        "init-declarations": "off",
        "keyword-spacing": "off",
        "lines-between-class-members": "off",
        "no-array-constructor": "off",
        "no-dupe-class-members": "off",
        "no-duplicate-imports": "off",
        "no-empty-function": "off",
        "no-extra-parens": "off",
        "no-extra-semi": "off",
        "no-implied-eval": "off",
        "no-invalid-this": "off",
        "no-loop-func": "off",
        "no-loss-of-precision": "off",
        "no-magic-numbers": "off",
        "no-redeclare": "off",
        "no-restricted-imports": "off",
        "no-shadow": "off",
        "no-throw-literal": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-useless-constructor": "off",
        "object-curly-spacing": "off",
        "padding-line-between-statements": "off",
        "quotes": "off",
        "require-await": "off",
        "no-return-await": "off",
        "semi": "off",
        "space-before-blocks": "off",
        "space-before-function-paren": "off",
        "space-infix-ops": "off"
      }
    }
  ]
};

"use strict";

module.exports = {
  plugins: ["react"],
  rules: {
    "react/boolean-prop-naming": ["error", { validateNested: true }],
    "react/button-has-type": "error",
    "react/default-props-match-prop-types": "error",
    "react/destructuring-assignment": "error",
    "react/display-name": "error",
    "react/forbid-component-props": "error",
    "react/forbid-dom-props": "off",
    "react/forbid-elements": "off",
    "react/forbid-foreign-prop-types": ["error", { allowInPropTypes: true }],
    "react/forbid-prop-types": [
      "error",
      {
        checkContextTypes: true,
        checkChildContextTypes: true
      }
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: ["function-declaration", "arrow-function"],
        unnamedComponent: "arrow-function"
      }
    ],
    "react/hook-use-state": "error",
    "react/iframe-missing-sandbox": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-adjacent-inline-elements": "error",
    "react/no-array-index-key": "error",
    "react/no-arrow-function-lifecycle": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": ["error", "disallow-in-func"],
    "react/no-did-update-set-state": ["error", "disallow-in-func"],
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-invalid-html-attribute": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": ["error", { ignoreStateless: true }],
    "react/no-namespace": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-set-state": "off",
    "react/no-string-refs": ["error", { noTemplateLiterals: true }],
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/no-unsafe": ["error", { checkAliases: true }],
    "react/no-unstable-nested-components": "error",
    "react/no-unused-class-component-methods": "error",
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/no-will-update-set-state": ["error", "disallow-in-func"],
    "react/prefer-es6-class": "error",
    "react/prefer-exact-props": "error",
    "react/prefer-read-only-props": "error",
    "react/prefer-stateless-function": "error",
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": [
      "error",
      { forbidDefaultForRequired: true }
    ],
    "react/require-optimization": "error",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": "error",
    "react/sort-prop-types": [
      "error",
      {
        callbacksLast: true,
        requiredFirst: true,
        sortShapeProp: true,
        noSortAlphabetically: true
      }
    ],
    "react/state-in-constructor": ["error", "never"],
    "react/static-property-placement": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    // JSX-specific rules
    "react/jsx-boolean-value": "error",
    "react/jsx-child-element-spacing": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-curly-newline": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-filename-extension": "error",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-fragments": "error",
    "react/jsx-handler-names": "error",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true
      }
    ],
    "react/jsx-max-depth": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-newline": "off",
    "react/jsx-no-bind": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-leaked-render": "error",
    "react/jsx-no-literals": "off",
    "react/jsx-no-script-url": "error",
    "react/jsx-no-target-blank": [
      "error",
      {
        enforceDynamicLinks: "always",
        warnOnSpreadAttributes: true,
        forms: true
      }
    ],
    "react/jsx-no-undef": "error",
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "off",
    "react/jsx-props-no-spreading": "error",
    "react/jsx-sort-default-props": "off",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
        reservedFirst: true
      }
    ],
    "react/jsx-space-before-closing": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};

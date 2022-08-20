"use strict";

module.exports = {
  root: true,
  extends: ["./eslint", "./eslint-comments", "./import", "./unicorn"],
  env: {
    node: true,
    es2020: true
  },
  rules: {
    "import/no-unused-modules": "off",
    "import/no-commonjs": "off",
    "unicorn/prefer-module": "off"
  },
  overrides: [
    {
      files: ["*.test.js", "./src/__utils__/*.js"],
      extends: ["./jest"],
      rules: {
        "jest/require-hook": "off"
      }
    }
  ]
};

"use strict";

module.exports = {
  plugins: ["eslint-comments"],
  rules: {
    // Best Practices
    "eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
    "eslint-comments/no-aggregating-enable": "error",
    "eslint-comments/no-duplicate-disable": "error",
    "eslint-comments/no-unlimited-disable": "error",
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/no-unused-enable": "error",
    // Stylistic Issues
    "eslint-comments/no-restricted-disable": ["error"],
    "eslint-comments/no-use": [
      "error",
      { allow: ["eslint-disable-next-line"] }
    ],
    "eslint-comments/require-description": "error"
  }
};

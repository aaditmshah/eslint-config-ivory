"use strict";

module.exports = {
  plugins: ["import"],
  rules: {
    // Static analysis
    "import/no-unresolved": ["error", { commonjs: true }],
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/no-restricted-paths": "off",
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-internal-modules": "off",
    "import/no-webpack-loader-syntax": "error",
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/no-useless-path-segments": [
      "error",
      {
        noUselessIndex: true,
        commonjs: true
      }
    ],
    "import/no-relative-parent-imports": "error",
    "import/no-relative-packages": "error",
    // Helpful warnings
    "import/export": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-deprecated": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-unused-modules": [
      "error",
      {
        missingExports: true,
        unusedExports: true
      }
    ],
    // Module systems
    "import/unambiguous": "error",
    "import/no-commonjs": "error",
    "import/no-amd": "error",
    "import/no-nodejs-modules": "off",
    "import/no-import-module-exports": "error",
    // Style guide
    "import/first": "error",
    "import/exports-last": "error",
    "import/no-duplicates": "error",
    "import/no-namespace": "off",
    "import/extensions": "off",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        warnOnUnassignedImports: true
      }
    ],
    "import/newline-after-import": "error",
    "import/prefer-default-export": "off",
    "import/max-dependencies": "off",
    "import/no-unassigned-import": "error",
    "import/no-named-default": "error",
    "import/no-default-export": "off",
    "import/no-named-export": "off",
    "import/no-anonymous-default-export": "error",
    "import/group-exports": "error",
    "import/dynamic-import-chunkname": "error",
    // Deprecated
    "import/imports-first": "off"
  }
};

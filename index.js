"use strict";

module.exports = {
  extends: [
    "./eslint",
    "./eslint-comments",
    "./import",
    "./unicorn",
    "./promise",
    "./typescript",
    "./react",
    "./react-hooks",
    "./jsx-a11y",
    "./next"
  ].map((id) => require.resolve(id)),
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }]
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"]
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true
      },
      node: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".d.ts"]
      }
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
    "import/external-module-folders": ["node_modules", "node_modules/@types"]
  },
  overrides: [
    {
      files: ["*.test.js", "*.test.jsx", "*.test.ts", "*.test.tsx"],
      extends: ["./jest"].map((id) => require.resolve(id))
    }
  ]
};

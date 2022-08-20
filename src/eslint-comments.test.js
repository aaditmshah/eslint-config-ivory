"use strict";

const eslintCommentsPlugin = require("eslint-plugin-eslint-comments");
const { testConfig } = require("./__utils__/test");
const eslintCommentsConfig = require("./eslint-comments");

const eslintCommentsPluginRules = new Map(
  Object.entries(eslintCommentsPlugin.rules)
);

testConfig("eslint-comments", {
  prefix: "eslint-comments",
  sourceRules: eslintCommentsPluginRules,
  targetRules: eslintCommentsConfig.rules
});

"use strict";

const tsPlugin = require("@typescript-eslint/eslint-plugin");
const { testConfig } = require("./__utils__/test");
const tsConfig = require("./typescript");

const tsPluginRules = new Map(Object.entries(tsPlugin.rules));

testConfig("typescript", {
  prefix: "@typescript-eslint",
  sourceRules: tsPluginRules,
  targetRules: tsConfig.rules,
  overrideRules: tsConfig.overrides[0].rules
});

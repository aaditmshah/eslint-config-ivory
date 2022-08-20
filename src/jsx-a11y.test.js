"use strict";

const jsxA11yPlugin = require("eslint-plugin-jsx-a11y");
const { testConfig } = require("./__utils__/test");
const jsxA11yConfig = require("./jsx-a11y");

const jsxA11yPluginRules = new Map(Object.entries(jsxA11yPlugin.rules));

testConfig("jsx-a11y", {
  prefix: "jsx-a11y",
  sourceRules: jsxA11yPluginRules,
  targetRules: jsxA11yConfig.rules
});

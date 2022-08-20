"use strict";

const jestPlugin = require("eslint-plugin-jest");
const { testConfig } = require("./__utils__/test");
const jestConfig = require("./jest");

const jestPluginRules = new Map(Object.entries(jestPlugin.rules));

testConfig("jest", {
  prefix: "jest",
  sourceRules: jestPluginRules,
  targetRules: jestConfig.rules
});

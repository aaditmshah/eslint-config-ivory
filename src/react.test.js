"use strict";

const reactPlugin = require("eslint-plugin-react");
const { testConfig } = require("./__utils__/test");
const reactConfig = require("./react");

const reactPluginRules = new Map(Object.entries(reactPlugin.rules));

testConfig("react", {
  prefix: "react",
  sourceRules: reactPluginRules,
  targetRules: reactConfig.rules
});

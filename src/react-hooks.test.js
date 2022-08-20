"use strict";

const reactHooksPlugin = require("eslint-plugin-react-hooks");
const { testConfig } = require("./__utils__/test");
const reactHooksConfig = require("./react-hooks");

const reactHooksPluginRules = new Map(Object.entries(reactHooksPlugin.rules));

testConfig("react-hooks", {
  prefix: "react-hooks",
  sourceRules: reactHooksPluginRules,
  targetRules: reactHooksConfig.rules
});

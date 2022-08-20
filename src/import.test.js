"use strict";

const importPlugin = require("eslint-plugin-import");
const { testConfig } = require("./__utils__/test");
const importConfig = require("./import");

const importPluginRules = new Map(Object.entries(importPlugin.rules));

testConfig("import", {
  prefix: "import",
  sourceRules: importPluginRules,
  targetRules: importConfig.rules
});

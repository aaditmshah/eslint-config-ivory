"use strict";

const unicornPlugin = require("eslint-plugin-unicorn");
const { testConfig } = require("./__utils__/test");
const unicornConfig = require("./unicorn");

const unicornPluginRules = new Map(Object.entries(unicornPlugin.rules));

testConfig("unicorn", {
  prefix: "unicorn",
  sourceRules: unicornPluginRules,
  targetRules: unicornConfig.rules
});

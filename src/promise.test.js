"use strict";

const promisePlugin = require("eslint-plugin-promise");
const { testConfig } = require("./__utils__/test");
const promiseConfig = require("./promise");

const promisePluginRules = new Map(Object.entries(promisePlugin.rules));

testConfig("promise", {
  prefix: "promise",
  sourceRules: promisePluginRules,
  targetRules: promiseConfig.rules
});

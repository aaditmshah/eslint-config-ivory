"use strict";

const nextPlugin = require("@next/eslint-plugin-next");
const { testConfig } = require("./__utils__/test");
const nextConfig = require("./next");

const nextPluginRules = new Map(Object.entries(nextPlugin.rules));

testConfig("next", {
  prefix: "@next/next",
  sourceRules: nextPluginRules,
  targetRules: nextConfig.rules
});

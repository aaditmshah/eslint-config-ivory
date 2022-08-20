"use strict";

module.exports = {
  plugin: ["promise"],
  rules: {
    "promise/catch-or-return": ["error", { allowFinally: true }],
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/always-return": "error",
    "promise/no-native": "error",
    "promise/no-nesting": "error",
    "promise/no-promise-in-callback": "error",
    "promise/no-callback-in-promise": "error",
    "promise/avoid-new": "error",
    "promise/no-new-statics": "error",
    "promise/no-return-in-finally": "error",
    "promise/valid-params": "error",
    "promise/prefer-await-to-then": "error",
    "promise/prefer-await-to-callbacks": "error"
  }
};

"use strict";

const Ajv = require("ajv");
const metaSchema = require("ajv/lib/refs/json-schema-draft-04.json");

const ajv = new Ajv({
  meta: false,
  useDefaults: true,
  validateSchema: false,
  missingRefs: "ignore",
  verbose: true,
  schemaId: "auto"
});

ajv.addMetaSchema(metaSchema);
// eslint-disable-next-line no-underscore-dangle -- This is a third party library.
ajv._opts.defaultMeta = metaSchema.id;

const compile = (schema) =>
  ajv.compile(
    Array.isArray(schema)
      ? {
          type: "array",
          items: schema.length > 0 ? schema : undefined,
          minItems: 0,
          maxItems: schema.length
        }
      : schema
  );

module.exports = { compile };

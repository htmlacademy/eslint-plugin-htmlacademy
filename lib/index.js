/**
 * @fileoverview Rules collection for javascript intensives
 * @author Sergey Kluchkovsky
 */

const wordCategories = require("./word-categories");

module.exports.extendWordCategories = wordCategories.extendWordCategories;

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = {
  'array-names-plural': require('./rules/array-names-plural'),
  'value-single-noun': require('./rules/value-single-noun'),
  'function-starts-verb': require('./rules/function-starts-verb'),
  'class-enumeration-names': require('./rules/class-enumeration-names'),
  'export-let': require('./rules/export-let'),
  'no-inner-html': require('./rules/no-inner-html'),
  'no-assignment-in-test': require('./rules/no-assignment-in-test'),
  'no-boolean-return': require('./rules/no-boolean-return'),
  'no-property-name-duplication': require('./rules/no-property-name-duplication'),
  'no-type-in-name': require('./rules/no-type-in-name'),
  'no-concat-in-literal': require('./rules/no-concat-in-literal'),
  'export-class-default': require('./rules/export-class-default'),
  'using-array-methods': require('./rules/using-array-methods'),
  'using-dom-methods': require('./rules/using-dom-methods'),
};

module.exports.configs = {
  recommended: {
    rules: {
      'htmlacademy/array-names-plural': 1,
      'htmlacademy/value-single-noun': 1,
      'htmlacademy/function-starts-verb': 1,
      'htmlacademy/class-enumeration-names': 1,
      'htmlacademy/export-let': 1,
      'htmlacademy/no-inner-html': 1,
      'htmlacademy/no-assignment-in-test': 1,
      'htmlacademy/no-boolean-return': 1,
      'htmlacademy/no-property-name-duplication': 1,
      'htmlacademy/no-type-in-name': 1,
      'htmlacademy/no-concat-in-literal': 1,
      'htmlacademy/export-class-default': 1,
      'htmlacademy/using-array-methods': 1,
      'htmlacademy/using-dom-methods': 1,
    }
  }
};

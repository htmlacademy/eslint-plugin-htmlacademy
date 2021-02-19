/**
 * @fileoverview Rules collection for javascript intensives
 * @author Sergey Kluchkowsky
 */

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
    }
  }
};

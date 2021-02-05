/**
 * @fileoverview Rules collection for javascript intensives
 * @author Sergey Kluchkovsky
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = {
  'array-names-plural': require('./rules/array-names-plural'),
  'value-single-noun': require('./rules/value-single-noun'),
};

module.exports.configs = {
  recommended: {
    rules: {
      'htmlacademy/array-names-plural': 1,
      'htmlacademy/value-single-noun': 1
    }
  }
};

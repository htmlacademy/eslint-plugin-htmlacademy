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
  'array-names-plural': require('./rules/array-names-plural')
};

module.exports.configs = {
  recommended: {
    rules: {
      'htmlacademy/array-names-plural': 1
    }
  }
};

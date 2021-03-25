/**
 * @fileoverview Variable names should not include type
 * @author Sergey Kluchkovsky
 */
"use strict";

const {splitCamelCase} = require("../case");
const {getLang} = require('./lang/no-type-in-name');
const {schema} = require("../lang");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Variable names should not include type",
      category: "Semantics",
      recommended: false
    },
    fixable: null,
    schema
  },

  create: function(context) {

    // variables should be defined here
    const typeNames = [
      'string', 'number', 'boolean', 'object', 'array'
    ];

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const {msg} = getLang(context);

    // any helper functions should go here or else delete this section
    const checkVariableDeclarator = (node) => {
      const { id: { name } } = node;
      const parts = splitCamelCase(name);
      const type = parts.find((part) => typeNames.includes(part));

      if (type) {
        context.report(
          node,
          msg(name, type)
        );
      }
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      "VariableDeclarator": checkVariableDeclarator
    };
  }
};

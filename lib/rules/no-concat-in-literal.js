/**
 * @fileoverview Concatenation should not be used inside string literals
 * @author Sergey Kluchkovsky
 */
"use strict";

const {getLang} = require('./lang/no-concat-in-literal');
const {schema} = require('../lang');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Concatenation should not be used inside string literals",
      category: "Semantics",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema
  },

  create: function(context) {

    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const {msg} = getLang(context);

    const checkBinaryExpression = (node) => {
      if (node.operator !== '+') {
        return;
      }

      let parent = node.parent;
      if (parent.type === 'BinaryExpression') {
        return;
      }

      if (parent.type === 'TemplateLiteral') {
        context.report(parent, msg());
      }
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      "BinaryExpression": checkBinaryExpression
    };
  }
};

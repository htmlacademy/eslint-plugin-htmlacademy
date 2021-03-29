/**
 * @fileoverview Concatenation should not be used inside string literals
 * @author Sergey Kluchkovsky
 */
"use strict";

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
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {

    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const checkBinaryExpression = (node) => {
      if (node.operator !== '+') {
        return;
      }

      let parent = node.parent;
      if (parent.type === 'BinaryExpression') {
        return;
      }

      if (parent.type === 'TemplateLiteral') {
        context.report(
          parent,
          'Template literal should not include concatenation'
        );
      }
    };

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      "BinaryExpression": checkBinaryExpression
    };
  }
};

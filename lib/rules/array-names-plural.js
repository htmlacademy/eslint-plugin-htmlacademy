/**
 * @fileoverview Array names should be plural nouns
 * @author Sergey Kluchkovsky
 */
"use strict";

const {isPluralNoun} = require('../word-categories');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const msg = () => (
  'Array name should be plural noun'
);

module.exports = {
  meta: {
    docs: {
      description: "Array names should be plural nouns",
      category: "Semantics",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const check = (node, name, valueNode) => {
      if (valueNode && valueNode.type === 'ArrayExpression') {
        if (!isPluralNoun(name)) {
          context.report(node, msg());
        }
      }
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      "VariableDeclarator": (node) => {
        check(node, node.id.name, node.init);
      },
      "Property": (node) => {
        check(node, node.key.name, node.value);
      }
    };
  }
};

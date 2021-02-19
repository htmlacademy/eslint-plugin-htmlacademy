/**
 * @fileoverview Array names should be plural nouns
 * @author Sergey Kluchkowsky
 */

const {isPluralNoun} = require('../word-categories');
const {splitCamelCase} = require('../case');
const {getLang} = require('./lang/array-names-plural');
const {schema} = require("../lang");

/* Rule Definition */

module.exports = {
  meta: {
    docs: {
      description: "Array name should be plural noun",
      category: "Semantics",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema
  },

  create: function(context) {
    const {msg} = getLang(context);

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const check = (node, name, valueNode) => {
      if (valueNode && valueNode.type === 'ArrayExpression') {
        const nameParts = splitCamelCase(name);
        const lastName = nameParts[nameParts.length - 1];
        if (!isPluralNoun(lastName)) {
          context.report(node, msg(name));
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

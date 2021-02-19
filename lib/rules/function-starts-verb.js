/**
 * @fileoverview Function/method name should start with verb
 * @author Sergey Kluchkowsky
 */
"use strict";

const {isVerb} = require("../word-categories");
const {splitCamelCase} = require("../case");
const {getLang} = require("./lang/function-starts-verb");
const {schema} = require("../lang");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Function/method name should start with verb",
      category: "Semantics",
      recommended: false
    },
    fixable: null,
    schema
  },

  create: function(context) {

    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const {msg} = getLang(context);

    const functionNodeTypes = [
      "ArrowFunctionExpression",
      "FunctionExpression",
    ];

    const isFunctionNode = (node) => (
      functionNodeTypes.includes(node.type)
    );

    const checkIdentifier = (name, node, {maybeConstructor = false} = {}) => {
      if (maybeConstructor && name === 'constructor') {
        return;
      }

      const [firstPart] = splitCamelCase(name);

      if (!isVerb(firstPart)) {
        context.report(node, msg(name));
      }
    };

    const checkPropertyNameIfFunction = (node) => {
      const {key, value} = node;

      if (isFunctionNode(value)) {
        checkIdentifier(key.name, node);
      }
    };

    const checkVariableDeclaratorIfFunction = (node) => {
      const {id, init} = node;

      if (isFunctionNode(init)) {
        checkIdentifier(id.name, node);
      }
    };

    const checkMethodDefinition = (node) => {
      const {key} = node;

      checkIdentifier(key.name, node, {maybeConstructor: true});
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      "Property": checkPropertyNameIfFunction,
      "VariableDeclarator": checkVariableDeclaratorIfFunction,
      "MethodDefinition": checkMethodDefinition
    };
  }
};

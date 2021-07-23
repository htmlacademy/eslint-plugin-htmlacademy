/**
 * @fileoverview dom methods should be used correctly
 * @author Sergey Kluchkovsky
 */

"use strict";

// const {getLang} = require("./lang/using-array-methods");
const {schema} = require("../lang");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "dom methods should be used correctly",
      category: "Semantics",
      recommended: false
    },
    fixable: null,
    schema,
  },

  create: function(context) {
    const getAttributeMsg = (count) => {
      return `getAttribute() should have 1 argument, but has ${count}`;
    };

    const setAttributeMsg = (count) => {
      return `setAttribute() should have 2 arguments, but has ${count}`;
    };

    const checkGetAttribute = (node) => {
      if (node.arguments.length !== 1) {
        context.report(
          node,
          getAttributeMsg(node.arguments.length)
        );
      }
    };

    const checkSetAttribute = (node) => {
      if (node.arguments.length !== 2) {
        context.report(
          node,
          setAttributeMsg(node.arguments.length)
        );
      }
    };

    const checkForMethodName = {
      getAttribute: checkGetAttribute,
      setAttribute: checkSetAttribute,
    };

    const checkCallExpression = (node) => {
      const method = node.callee.property;
      if (method.type === "Identifier") {
        const check = checkForMethodName[method.name];
        if (typeof check === "function") {
          check(node);
        }
      }
    };

    return {
      CallExpression: checkCallExpression
    }
  }
};

/**
 * @fileoverview Assignment should not be used in test or as argument
 * @author Sergey Kluchkowsky
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const {getLang} = require("./lang/no-assignment-in-test");
const {schema} = require("../lang");

module.exports = {
  meta: {
    docs: {
      description: "Assignment should not be used in test or as argument",
      category: "Semantics",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema
  },

  create: function(context) {

    const nodesWithTest = [
      "IfStatement",
      "WhileStatement",
      "ForStatement"
    ];

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const {msg} = getLang(context);

    const isTest = (node) => (
      node.parent &&
        nodesWithTest.includes(node.parent.type) &&
        node.parent.test === node
    );

    const isArgument = (node) => (
      node.parent &&
        node.parent.type === "CallExpression" &&
        node.parent.arguments.includes(node)
    );

    const isTestOrArgument = (node) => (
      isTest(node) || isArgument(node)
    );

    const checkAssignmentInsideTest = (node) => {
      for (let target = node; target; target = target.parent) {
        if (isTestOrArgument(target)) {
          context.report(node, msg());
          break;
        }

        if (target.type.endsWith('Statement')) {
          break;
        }
      }
    };

    return {
      "AssignmentExpression": checkAssignmentInsideTest
    };
  }
};

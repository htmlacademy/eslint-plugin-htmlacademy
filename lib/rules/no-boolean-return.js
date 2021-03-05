/**
 * @fileoverview Should not return true/false from if/else
 * @author Sergey Kluchkowsky
 */
"use strict";

const {getLang} = require("./lang/no-boolean-return");
const {schema} = require("../lang");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Should not return true/false from if/else",
      category: "Intensives",
      recommended: false
    },
    fixable: null,
    schema
  },

  create: function(context) {

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const {msg} = getLang(context);

    const isLiteral = (value, node) => {
      return (
        node.type === "Literal" &&
          node.value === value
      );
    };

    const returns = (value, node) => {
      return (
        node.type === "ReturnStatement" &&
          isLiteral(value, node.argument)
      ) || (
      node.type === "BlockStatement" &&
        node.body.length === 1 &&
        returns(value, node.body[0])
      );
    };

    const isDummyIfStatement = (node) => {
      return (
        node.type === "IfStatement" &&
          returns(true, node.consequent) &&
          returns(false, node.alternate)
      );
    };

    const checkIsDummyStatement = (node) => {
      if (isDummyIfStatement(node)) {
        context.report(node, msg());
      }
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      "IfStatement": checkIsDummyStatement
    };
  }
};

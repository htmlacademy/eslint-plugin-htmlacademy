/**
 * @fileoverview Should not return true/false from if/else
 * @author Sergey Kluchkowsky
 */
"use strict";

const {getLang} = require("./lang/no-boolean-return");
const {schema} = require("../lang");
const {has} = require("../utils");

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
        has(node, "type", "Literal") &&
        has(node, "value", value)
      );
    };

    const returns = (value, node) => {
      return (
        has(node, "type", "ReturnStatement") &&
        has(node, "argument") &&
        isLiteral(value, node.argument)
      ) || (
        has(node, "type", "BlockStatement") &&
        node.body.length === 1 &&
        returns(value, node.body[0])
      );
    };

    const checkWithValue = (booleanValue, node) => (
      returns(booleanValue, node.consequent) &&
        returns(!booleanValue, node.alternate)
    );

    const isDummyIfStatement = (node) => (
      has(node, "type", "IfStatement") &&
        checkWithValue(true, node) ||
        checkWithValue(false, node)
    );

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

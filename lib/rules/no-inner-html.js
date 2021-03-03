/**
 * @fileoverview Should be no assignment to innerHTML
 * @author Sergey Kluchkowsky
 */
"use strict";

const {getLang} = require("./lang/no-inner-html");
const {schema} = require("../lang");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Should be no assignment to innerHTML",
      category: "Fill me in",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema
  },

  create: function(context) {

    // variables should be defined here
    const innerHTML = "innerHTML";

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const {assignmentMsg} = getLang(context);

    const isInnerHTMLProperty = (node) => (
      (node.type === "Identifier" && node.name === innerHTML) || (
        node.type === "Literal" && node.value === innerHTML)
    );

    const isMemberExpressionWithInnerHTML = (node) => (
      node.type === "MemberExpression" &&
        isInnerHTMLProperty(node.property)
    );

    const isEmptyValue = (node) => (
      node.type === "Literal" && node.value === ""
    );

    const checkNoInnerHTMLAssignment = (node) => {
      if (isMemberExpressionWithInnerHTML(node.left) && !isEmptyValue(node.right)) {
        context.report(
          node,
          assignmentMsg()
        );
      }
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      "AssignmentExpression": checkNoInnerHTMLAssignment
    };
  }
};

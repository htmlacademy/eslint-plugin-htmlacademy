/**
 * @fileoverview Do not allow to export not a constant value
 * @author Sergey Kluchkowsky
 */
"use strict";

const {getLang} = require('./lang/export-let');
const {schema} = require("../lang");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Do not allow to export not a constant value",
      category: "Semantics",
      recommended: false
    },
    fixable: null,
    schema
  },

  create: function(context) {

    const {msg} = getLang(context);

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const mutableKinds = ["let", "var"];

    const checkMutableDeclaration = (node) => {
      const parent = node.parent;

      if (mutableKinds.includes(node.kind) &&
          parent.type === "ExportNamedDeclaration") {
        context.report(
          node,
          msg(node.kind)
        );
      }
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      "VariableDeclaration": checkMutableDeclaration
    };
  }
};

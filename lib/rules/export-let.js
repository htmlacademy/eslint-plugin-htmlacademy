/**
 * @fileoverview Do not allow to export not a constant value
 * @author Sergey Kluchkowsky
 */
"use strict";

const {getLang} = require('./lang/export-let');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Do not allow to export not a constant value",
      category: "Fill me in",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      {
        "type": "object",
        "properties": {
          "lang": {
            "type": "string"
          }
        }
      }
    ]
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

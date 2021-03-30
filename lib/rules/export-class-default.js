/**
 * @fileoverview Class should be exported only as default
 * @author Sergey Kluchkovsky
 */
"use strict";

const {getLang} = require('./lang/export-class-default');
const {schema} = require('../lang');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Class should be exported only as default",
      category: "Semantics",
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

    const checkExportNamedDeclaration = (node) => {
      if (node.declaration.type === "ClassDeclaration") {
        context.report(
          node,
          msg(node.declaration.id.name)
        );
      }
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      "ExportNamedDeclaration": checkExportNamedDeclaration
    };
  }
};

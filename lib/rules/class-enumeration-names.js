/**
 * @fileoverview Class/enumeration name should be noun starting with upcase letter
 * @author Sergey Kluchkowsky
 */
"use strict";

const {splitCamelCase} = require('../case');
const {isNoun} = require('../word-categories');
const {getLang} = require('./lang/class-enumeration-names');

const {
  findParentWithType,
  isEnumerationObject
} = require("../ast-fragments");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Class/enumeration name should be noun starting with upcase letter",
      category: "Semantics",
      recommended: false
    },
    fixable: null,
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

  create(context) {
    // Functions with this expression inside
    //
    const fnsToCheck = [];

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const {ctorMsg, classMsg, enumMsg} = getLang(context);

    const findFunctionToCheckOnExit = (node) => {
      const parentFn = (
        findParentWithType(node, "FunctionExpression") ||
          findParentWithType(node, "FunctionDeclaration")
      );

      if (parentFn) {
        fnsToCheck.push(parentFn);
      }
    };

    const checkInitIsConstructor = (node) => {
      const {init} = node;

      if (init && init.type === "FunctionExpression") {
        if (fnsToCheck.includes(init)) {
          checkConstructorName(node.id.name, node);
        }
      }
    };

    const checkIfConstructorDeclarated = (node) => {
      const {id} = node;

      if (id && id.name) {
        if (fnsToCheck.includes(node)) {
          checkConstructorName(id.name, node);
        }
      }
    };

    const checkConstructorName = (name, node, msg = ctorMsg) => {
      const parts = splitCamelCase(name, {upperStart: true});
      const noun = parts[0];

      if (!isNoun(noun) || !/[A-Z]/.test(name.slice(0, 1))) {
        context.report(
          node,
          msg(name)
        );
      }
    };

    const checkClassName = (node) => {
      checkConstructorName(node.id.name, node, classMsg);
    };

    const checkEnumerationName = (node) => {
      const {init} = node;

      if (isEnumerationObject(init)) {
        checkConstructorName(node.id.name, node, enumMsg);
      }
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    return {
      "ThisExpression": findFunctionToCheckOnExit,
      "VariableDeclarator": checkEnumerationName,
      "VariableDeclarator:exit": checkInitIsConstructor,
      "FunctionDeclaration:exit": checkIfConstructorDeclarated,
      "ClassDeclaration": checkClassName,
    };
  }
};

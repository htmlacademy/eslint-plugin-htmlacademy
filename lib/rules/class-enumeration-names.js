/**
 * @fileoverview Class/enumeration name should be noun starting with upcase letter
 * @author Sergey Kluchkowsky
 */
"use strict";

const {splitCamelCase, isConstantName} = require('../case');
const {isSingleNoun} = require('../word-categories');

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
    fixable: null
  },

  create(context) {
    // Functions with this expression inside
    //
    const fnsToCheck = [];

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const ctorMsg = (name) => (
      "Constructor name «" + name + "» should start with uppercase letter and be single noun"
    );

    const classMsg = (name) => (
      "Class name «" + name + "» should start with uppercase letter and be single noun"
    );

    const enumMsg = (name) => (
      "Enumeration name «" + name + "» should start with uppercase letter and be single noun"
    );

    const findParentWithType = (node, type) => {
      let target = node.parent;

      while (target) {
        if (target.type === type) {
          break;
        }

        target = target.parent;
      }

      return target;
    };

    const findFunctionToCheckOnExit = (node) => {
      const parentFn = (
        findParentWithType(node, "FunctionExpression") ||
          findParentWithType(node, "FunctionDeclaration")
      );

      if (parentFn) {
        fnsToCheck.push(parentFn);
      }
    };

    const hasUppercaseKey = (node) => {
      return (
        node.type === "Property" &&
          isConstantName(node.key.name)
      );
    };

    const isEnumerationObject = (node) => {
      return (
        node.type === "ObjectExpression" &&
          node.properties.every(hasUppercaseKey)
      );
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

      if (!isSingleNoun(noun) || !/[A-Z]/.test(name.slice(0, 1))) {
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

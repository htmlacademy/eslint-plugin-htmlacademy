/**
 * @fileoverview Value name should be single noun
 * @author Sergey Kluchkowsky
 */
"use strict";

const {
  isSingleNoun,
  isVerb,
  isAdjective,
  isGerund,
} = require('../word-categories');

const {splitCamelCase} = require('../camel-case');

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Value name should be single noun",
      category: "Semantics",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {

    // variables should be defined here
    const nameExceptions = [
      'xhr', 'evt', 'ctx', 'img', 'src'
    ];

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    //
    const paramMsg = (name) => (
      `Parameter name «${name}» should be singular noun`
    );

    const catchMsg = (name) => (
      `Catch parameter name «${name}» should be singular noun`
    );

    const declarationMsg = (name) => (
      `Variable declaration name «${name}» should be singular noun`
    );

    const checkParamName = (node, name, paramIdx, paramsCount) => {
      // Имя может быть cb, если paramsCount === 1
      // Имя может быть err, если paramIdx === 0
      // Имя может быть одним из исключений
      //   `xhr`, `evt`, `ctx`, `img`, `src`
      const success = (
        (name === 'cb' && paramsCount === 1) ||
          (name === 'err' && paramIdx === 0) ||
          nameExceptions.includes(name) ||
          isSingleNoun(name)
      );

      if (!success) {
        context.report(node, paramMsg(name));
      }
    };

    const checkCatchParamName = (node, name) => {
      const success = (
        name === 'err' ||
          isSingleNoun(name)
      );

      if (!success) {
        context.report(node, catchMsg(name));
      }
    };

    const checkVariableDeclarationName = (node, name) => {
      const parts = splitCamelCase(name);
      const success = (
        parts.length === 1 && (
          nameExceptions.includes(name) ||
            isSingleNoun(name) ||
            isGerund(name)
        ) ||
        parts.length === 2 && parts[0] === 'is' && (
          isGerund(parts[1]) ||
            isAdjective(parts[1]) ||
            isVerb(parts[1]) ||
            isSingleNoun(parts[1])
        )
      );

      if (!success) {
        context.report(node, declarationMsg(name));
      }
    };

    const checkParams = (node) => {
      const paramsCount = node.params.length;
      node.params.forEach((paramNode, i) => {
        checkParamName(node, paramNode.name, i, paramsCount);
      });
    };

    const checkCatchParam = (node) => {
      checkCatchParamName(node, node.param.name);
    };

    const checkVariableDeclaration = (node) => {
      if (node.init.type !== 'ArrayExpression') {
        checkVariableDeclarationName(node, node.id.name);
      }
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    // ArrowFunctionExpression: {
    //   params: [ { type: identifier, name } ]
    // FunctionExpression: {
    //   params: [ { type: identifier, name } ]
    // FunctionDeclaration: {
    //   params: [ { type: identifier, name } ]
    // VariableDeclarator: {
    //   id: { type: identifier, name }
    return {
      ArrowFunctionExpression: checkParams,
      FunctionExpression: checkParams,
      FunctionDeclaration: checkParams,

      CatchClause: checkCatchParam,

      VariableDeclarator: checkVariableDeclaration,
    };
  }
};

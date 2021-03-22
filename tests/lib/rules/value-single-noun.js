/**
 * @fileoverview Value name should be single noun
 * @author Sergey Kluchkowsky
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/value-single-noun");
const {RuleTester} = require("eslint");

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 2015
  }
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("value-single-noun", rule, {

  valid: [
    "const name = 'Hedgehog';",
    "const check = (err) => null;",
    "let xhr = 5, img = 42, ctx = 7;",
    "const isLoading = false;",
    "let isDone = true;",
    "function check (name) {}",
    "function check (cb) {}",
    "try {} catch (err) {}",
    "for (let i = 0; i < 10; i++) {}",

    // Do not report error for functions
    "const getValue = () => null",
    "const getAge = function () {}",

    // Variable names may contain two parts
    "const redButton = 5;",
    "const errorMessage = 'Wtf?';",
    "const imgSize = 600;",
  ],

  invalid: [
    {
      code: "let x1 = 5",
      errors: [{
        message: "Variable declaration name «x1» should be singular noun",
        type: "VariableDeclarator"
      }]
    }, {
      code: "const check = (arg1) => null;",
      errors: [{
        message: "Parameter name «arg1» should be singular noun",
        type: "ArrowFunctionExpression"
      }]
    }, {
      code: "const check = function (arg1) { return 1; };",
      errors: [{
        message: "Parameter name «arg1» should be singular noun",
        type: "FunctionExpression"
      }]
    }, {
      code: "function check (x1) {};",
      errors: [{
        message: "Parameter name «x1» should be singular noun",
        type: "FunctionDeclaration"
      }]
    }, {
      code: "try {} catch (arg) {}",
      errors: [{
        message: "Catch parameter name «arg» should be singular noun",
        type: "CatchClause"
      }]
    }, {
      code: "for (let x1 = 0; x1 < 100; x1++) {}",
      errors: [{
        message: "Variable declaration name «x1» should be singular noun",
        type: "VariableDeclarator"
      }]
    }, {
      code: "for (let i = 0; i < 100; i++) { let j = 5; }",
      errors: [{
        message: "Variable declaration name «j» should be singular noun",
        type: "VariableDeclarator"
      }]
    }
  ]
});

/**
 * @fileoverview Class/enumeration name should be noun starting with upcase letter
 * @author Sergey Kluchkowsky
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const {RuleTester} = require("eslint");
const rule = require("../../../lib/rules/class-enumeration-names");

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 2015
  }
});


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("class-enumeration-names", rule, {
  valid: [
    "const Human = function () { this.name = 'John'; };",
    "class Job {}",
    "const Enumeration = { OK: 1, STATUS_FAIL: 0 };",
    "const Status = { OK: 1 };"
  ],

  invalid: [
    {
      code: "const human = function () { this.name = \"John\"; };",
      errors: [{
        message: "Constructor name «human» should start with uppercase letter and be single noun",
        type: "VariableDeclarator"
      }]
    }, {
      code: "const Bazz = function () { this.name = \"John\"; };",
      errors: [{
        message: "Constructor name «Bazz» should start with uppercase letter and be single noun",
        type: "VariableDeclarator"
      }]
    }, {
      code: "function Bazz() { this.name = \"Long\"; };",
      errors: [{
        message: "Constructor name «Bazz» should start with uppercase letter and be single noun",
        type: "FunctionDeclaration"
      }]
    }, {
      code: "class job {}",
      errors: [{
        message: "Class name «job» should start with uppercase letter and be single noun",
        type: "ClassDeclaration"
      }]
    }, {
      code: "const enumeration = { OK: 1, FAIL: 0 };",
      errors: [{
        message: "Enumeration name «enumeration» should start with uppercase letter and be single noun",
        type: "VariableDeclarator"
      }]
    }
  ]
});

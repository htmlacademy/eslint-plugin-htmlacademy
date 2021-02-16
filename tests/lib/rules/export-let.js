/**
 * @fileoverview Do not allow to export not a constant value
 * @author Sergey Kluchkowsky
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/export-let");
const {RuleTester} = require("eslint");

RuleTester.setDefaultConfig({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015
  }
});


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("export-let", rule, {

  valid: [
    "export const name = 'John';"
  ],

  invalid: [
    {
      code: "export let name = \"John\";",
      errors: [{
        message: "Declaration «let» should not be used in export statement",
        type: "VariableDeclaration"
      }]
    }, {
      code: "export var name = \"John\";",
      errors: [{
        message: "Declaration «var» should not be used in export statement",
        type: "VariableDeclaration"
      }]
    }
  ]
});

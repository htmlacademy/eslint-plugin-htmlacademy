/**
 * @fileoverview Should not return true/false from if/else
 * @author Sergey Kluchkowsky
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-boolean-return");
const {RuleTester} = require("eslint");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-boolean-return", rule, {

  valid: [
    "var fn = function (value) { return (value === 5); }"
  ],

  invalid: [
    {
      code: "var fn = function (value) { if (value === 5) { return true; } else { return false; } }",
      errors: [{
        message: "If statement may be replaced with return statement",
        type: "IfStatement"
      }]
    }, {
      code: "var fn = function (value) { if (value !== 5) { return false; } else { return true; } }",
      errors: [{
        message: "If statement may be replaced with return statement",
        type: "IfStatement"
      }]
    }
  ]
});

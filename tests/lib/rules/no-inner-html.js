/**
 * @fileoverview Should be no assignment to innerHTML
 * @author Sergey Kluchkowsky
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-inner-html");
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
ruleTester.run("no-inner-html", rule, {

  valid: [
    "el.textContent = 'Foobar';",
    "let value = el.innerHTML;",
    "el.innerHTML = '';"
  ],

  invalid: [
    {
      code: "el.innerHTML = \"<script>alert('Hello!');</script>\";",
      errors: [{
        message: "Got assignment to property innerHTML",
        type: "AssignmentExpression"
      }]
    }
  ]
});

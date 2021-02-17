/**
 * @fileoverview Should be no assignment to innerHTML
 * @author Sergey Kluchkowsky
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-inner-html"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-inner-html", rule, {

  valid: [
    // give me some code that won't trigger a warning
    "el.textContent = 'Foobar';",
    "let value = el.innerHTML;"
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

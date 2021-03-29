/**
 * @fileoverview Concatenation should not be used inside string literals
 * @author Sergey Kluchkovsky
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-concat-in-literal");
const {RuleTester} = require('eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-concat-in-literal", rule, {

  valid: [
    "`Name is: ${firstName} ${lastName}`"
  ],

  invalid: [
    {
      code: "`Name is: ${firstName + ' ' + lastName}`",
      errors: [{
        message: "Template literal should not include concatenation",
        type: "TemplateLiteral"
      }]
    }
  ]
});

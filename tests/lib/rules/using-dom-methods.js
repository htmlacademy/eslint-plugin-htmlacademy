/**
 * @fileoverview dom methods should be used in correct manner
 * @author Sergey Kluchkovsky
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/using-dom-methods');
const {RuleTester} = require('eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("using-dom-methods", rule, {
  valid: [
    "el.getAttribute('a');",
    "el.setAttribute('a', 'b');",
  ],
  invalid: [
    {
      code: "el.getAttribute();",
      errors: [{
        message: "getAttribute() should have 1 argument, but has 0",
        type: "CallExpression"
      }]
    },
    {
      code: "el.getAttribute('a', 'b');",
      errors: [{
        message: "getAttribute() should have 1 argument, but has 2",
        type: "CallExpression"
      }]
    },
    {
      code: "el.setAttribute('a');",
      errors: [{
        message: "setAttribute() should have 2 arguments, but has 1",
        type: "CallExpression"
      }]
    },
  ]
});


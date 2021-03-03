/**
 * @fileoverview Assignment should not be used in test or as argument
 * @author Sergey Kluchkowsky
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const rule = require("../../../lib/rules/no-assignment-in-test");
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
ruleTester.run("no-assignment-in-test", rule, {

  valid: [
    // 1. i = getFirstValue() is not assignment
    // 2. i = getNextValue() is not condition
    "for (let i = getFirstValue(); i != null; i = getNextValue()) {}",

    // Not an assignment
    "let name = 'John';",

    // Not inside test
    "i += 10;",

    `const template = keys.reduce((collectKeys, key) => {
      collectKeys[key.toUpperCase()] = [];
      return collectKeys;
    }, {});`
  ],

  invalid: [
    {
      code: "if (a = 5) {}",
      errors: [{
        message: "Assignment should not be used in condition or call argument",
        type: "AssignmentExpression"
      }]
    }, {
      code: "if ((a = 5) == 5) {}",
      errors: [{
        message: "Assignment should not be used in condition or call argument",
        type: "AssignmentExpression"
      }]
    }, {
      code: "while (item = getNextItem()) {}",
      errors: [{
        message: "Assignment should not be used in condition or call argument",
        type: "AssignmentExpression"
      }]
    }, {
      code: "for (let i = 5; i = 10; i++) {}",
      errors: [{
        message: "Assignment should not be used in condition or call argument",
        type: "AssignmentExpression"
      }]
    }, {
      code: "getAddress(person = getNextPerson());",
      errors: [{
        message: "Assignment should not be used in condition or call argument",
        type: "AssignmentExpression"
      }]
    }
  ]
});

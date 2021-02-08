/**
 * @fileoverview Function/method name should start with verb
 * @author Sergey Kluchkowsky
 */
"use strict";

const {RuleTester} = require("eslint");
const rule = require("../../../lib/rules/function-starts-verb");

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 2015
  }
});

const ruleTester = new RuleTester();
ruleTester.run("function-starts-verb", rule, {

  valid: [
    "const getName = () => name;",
    "class Human { constructor() {} }"
  ],

  invalid: [
    {
      code: "const foo = () => null;",
      errors: [{
        message: "Function name «foo» does not start with verb",
        type: "VariableDeclarator"
      }]
    }, {
      code: "const obj = { baz() {} }",
      errors: [{
        message: "Function name «baz» does not start with verb",
        type: "Property"
      }]
    }, {
      code: "class Human { baz() {} }",
      errors: [{
        message: "Function name «baz» does not start with verb",
        type: "MethodDefinition"
      }]
    }
  ]
});

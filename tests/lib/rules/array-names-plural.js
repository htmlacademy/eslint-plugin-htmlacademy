/**
 * @fileoverview Array names should be plural nouns
 * @author Sergey Kluchkovsky
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/array-names-plural");
const {RuleTester} = require("eslint");

const parserOptions = {ecmaVersion: 2015};


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const code = (codeString) => ({
  code: codeString,
  parserOptions
});

const invalidCode = (codeString, type = 'VariableDeclarator') => ({
  parserOptions,
  code: codeString,
  errors: [{
    message: "Array name should be plural noun",
    type
  }]
});

const ruleTester = new RuleTester();
ruleTester.run("array-names-plural", rule, {

    valid: [
      code("const cats = ['Muffin', 'Gray'];"),
      code("const items = ['Green', 'Yellow', 'Red'];"),
      code("const obj = { weights: [ 38, 42 ] };")
    ],

    invalid: [
      invalidCode("const dog = [1, 2, 3];"),
      invalidCode("const emans = [1, 2, 3];"),
      invalidCode("const obj = { weight: [ 38, 42 ] };", "Property")
    ]
});

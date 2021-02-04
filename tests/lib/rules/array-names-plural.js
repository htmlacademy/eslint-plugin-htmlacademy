/**
 * @fileoverview Array names should be plural nouns
 * @author Sergey Kluchkovsky
 */
"use strict";

const {RuleTester} = require("eslint");
const rule = require("../../../lib/rules/array-names-plural");

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 2015
  }
});

const invalidCode = (codeString, name, type = 'VariableDeclarator') => ({
  code: codeString,
  errors: [{
    message: 'Provided array name «' + name + '» is not plural noun',
    type
  }]
});

const ruleTester = new RuleTester();
ruleTester.run("array-names-plural", rule, {
    valid: [
      "const cats = ['Muffin', 'Gray'];",
      "const items = ['Green', 'Yellow', 'Red'];",
      "const obj = { weights: [ 38, 42 ] };",
      "const greenLines = [];"
    ],

    invalid: [
      invalidCode("const dog = [1, 2, 3];", "dog"),
      invalidCode("const emans = [1, 2, 3];", "emans"),
      invalidCode("const obj = { weight: [ 38, 42 ] };", "weight", "Property")
    ]
});

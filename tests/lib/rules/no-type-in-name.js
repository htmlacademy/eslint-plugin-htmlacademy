/**
 * @fileoverview Variable names should not include type
 * @author Sergey Kluchkovsky
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-type-in-name');
const {RuleTester} = require('eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-type-in-name", rule, {
  valid: [
    "var filters = [];",
    "const wizard = {};"
  ],

  invalid: [
    {
      code: "var filtersArray = [];",
      errors: [{
        message: "Variable name «filtersArray» includes type name «array»",
        type: "VariableDeclarator"
      }]
    }
  ]
});

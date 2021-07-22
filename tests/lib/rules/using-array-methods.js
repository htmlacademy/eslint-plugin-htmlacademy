/**
 * @fileoverview methods Array.prototype.{map, forEach, filter} should be used in correct manner
 * @author Sergey Kluchkovsky
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/using-array-methods');
const {RuleTester} = require('eslint');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("using-array-methods", rule, {
  valid: [
    "const names = objects.map((o) => o.name);",
    "objects.map((o) => o.name).join(\", \");",
    "const namesString = objects.filter((o) => o.weight > 10).map((o) => o.name).join(', ');",
    "objects.forEach((o) => o.greet());",
    "objects.map", // MemberExpression should not be checked unless it's in CallExpression
    "useResult(0, objects.map((o) => o.name));",
  ],
  invalid: [
    {
      code: "const names = []; objects.map((o) => names.push(o.name));",
      errors: [{
        message: "Array.prototype.map() method should be used in assignment or in sequental call",
        type: "MemberExpression"
      }]
    },
    {
      code: "objects.filter((o) => o.name.startsWith('Aa'));",
      errors: [{
        message: "Array.prototype.filter() method should be used in assignment or in sequental call",
        type: "MemberExpression"
      }]
    },
    {
      code: "const result = objects.forEach((o) => o.greet());",
      errors: [{
        message: "Array.prototype.forEach() method should not be used in assignment or in sequental call",
        type: "MemberExpression"
      }]
    },
    {
      code: "const result = objects.map((o) => {});",
      errors: [{
        message: "Array.prototype.map() method's callback should return a value",
        type: "MemberExpression"
      }]
    },
    {
      code: "useResults(objects.forEach((o) => o.greet()));",
      errors: [{
        message: "Array.prototype.forEach() method should not be used in assignment or in sequental call",
        type: "MemberExpression"
      }]
    }
  ]
});

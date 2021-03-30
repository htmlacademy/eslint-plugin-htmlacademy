/**
 * @fileoverview Class should be exported only as default
 * @author Sergey Kluchkovsky
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/export-class-default");
const {RuleTester} = require("eslint");

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module"
  }
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("export-class-default", rule, {
  valid: [
    "class Foo {}; export default Foo",
    "export default class Foo {}",
    "const Foo = class {}; export default Foo",
    "let Foo = class {}; export default Foo",
  ],

  invalid: [
    {
      code: "export class Foo {}",
      errors: [{
        message: "Class «Foo» should be exported as default",
        type: "ExportNamedDeclaration"
      }]
    }
  ]
});

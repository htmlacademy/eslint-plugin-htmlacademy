/**
 * @fileoverview Property name should not contain object&#39;s name
 * @author Sergey Kluchkovsky
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-property-name-duplication");
const {RuleTester} = require("eslint");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-property-name-duplication", rule, {

  valid: [
    "const wizard = { name: 'Pendalf' };"
  ],

  invalid: [
    {
      code: "const wizard = { wizardName: 'Pendalf' }",
      errors: [{
        message: "Key wizardName includes object's name: wizard",
      }]
    }, {
      code: "const popup = { openPopup() {} }",
      errors: [{
        message: "Key openPopup includes object's name: popup",
      }]
    }
  ]
});

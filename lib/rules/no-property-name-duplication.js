/**
 * @fileoverview Property name should not contain object's name
 * @author Sergey Kluchkovsky
 */
"use strict";

const {splitCamelCase} = require("../case");
const {getLang} = require('./lang/no-property-name-duplication');
const {schema} = require("../lang");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Property name should not contain object's name",
      category: "Semantics",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema
  },

  create: function(context) {
    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
    const {msg} = getLang(context);

    const isObjectExpression = (node) => (
      node.type === 'ObjectExpression'
    );

    const getKeyName = (key) => {
      if (key.type === 'Identifier') {
        return key.name;
      }
      if (key.type === 'Literal') {
        return key.value;
      }
      throw new TypeError('Wrong property key node type: ' + key.type);
    };

    const checkObjectProperties = (properties, objectName) => {
      const checkSingleProperty = (node) => {
        const key = node.key;
        const keyName = getKeyName(key);
        const nameParts = splitCamelCase(keyName);

        if (nameParts.includes(objectName.toLowerCase())) {
          context.report(
            node,
            msg(keyName, objectName)
          );
        }
      };

      properties.
        filter((prop) => !prop.computed).
        forEach(checkSingleProperty);
    };

    const checkVariableDeclarator = (node) => {
      const {id: { name: varName }, init} = node;

      if (isObjectExpression(init)) {
        checkObjectProperties(init.properties, varName);
      }
    };

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------
    return {
      "VariableDeclarator": checkVariableDeclarator
    };
  }
};

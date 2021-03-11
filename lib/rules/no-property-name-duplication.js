/**
 * @fileoverview Property name should not contain object's name
 * @author Sergey Kluchkovsky
 */
"use strict";

const {splitCamelCase} = require("../case");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Property name should not contain object's name",
      category: "Fill me in",
      recommended: false
    },
    fixable: null,  // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function(context) {

    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------
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
            'Key ' + keyName + ' includes object\'s name: ' + objectName,
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

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      "VariableDeclarator": checkVariableDeclarator
    };
  }
};

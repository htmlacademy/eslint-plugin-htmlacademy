/**
 * @fileoverview methods Array.prototype.{map, forEach, filter} should be used in correct manner
 * @author Sergey Kluchkovsky
 */

"use strict";

const {getLang} = require("./lang/using-array-methods");
const {schema} = require("../lang");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "methods Array.prototype.{map, forEach, filter} should be used in correct manner",
      category: "Semantics",
      recommended: false
    },
    fixable: null,
    schema,
  },

  create: function(context) {
    const {noAssignmentMsg, assignmentMsg, noReturnMsg} = getLang(context);

    const methodsWithResult = ["map", "filter"];
    const methodsWithoutResult = ["forEach"];

    const isResultUsed = (node /* MemberExpression */) => {
      const grandParentCheck = (gpType, backPath) => {
        const parts = backPath.split(".");

        const backTrace = (node) => {
          let result = node;
          parts.some((part) => {
            if (typeof result === "object") {
              result = result[part];
              return false;
            } else {
              result = null;
              return true;
            }
          });
          return result;
        };

        const getGrandParent = (node) => {
          if (node.parent && node.parent.parent) {
            return node.parent.parent;
          }

          return null;
        };

        return (node) => {
          const grandParent = getGrandParent(node);
          if (grandParent) {
            return (
              grandParent.type === gpType &&
                backTrace(grandParent) === node
            );
          }

          return false;
        };
      };

      const isCallArgument = (node) => {
        const callExpression = node.parent;
        const fnExpression = callExpression.parent;

        if (!fnExpression || fnExpression.type !== "CallExpression") {
          return false;
        }

        if (fnExpression.arguments && fnExpression.arguments.find((a) => a === callExpression)) {
          return true;
        }

        return false;
      };

      return (
        grandParentCheck("MemberExpression", "object.callee")(node) ||
          grandParentCheck("AssignmentExpression", "right.callee")(node) ||
          grandParentCheck("VariableDeclarator", "init.callee")(node) ||
          isCallArgument(node)
      );
    };

    const callbackReturnsValue = (node) => {
      const parent = node.parent;

      if (parent.type !== "CallExpression") {
        return false;
      }

      const arg0 = parent.arguments[0];

      if (["ArrowFunctionExpression", "FunctionExpression"].includes(arg0.type)) {
        const body = arg0.body;
        if (body.type !== "BlockStatement") {
          return true;
        } else {
          if (body.body.length === 0) {
            return false;
          }
          return body.body[body.body.length - 1].type === "ReturnStatement";
        }
      }

      return false;
    };

    const checkArrayMethods = (node) => {
      if (!node.parent || node.parent.type !== "CallExpression") {
        // Skip simple properties
        return;
      }
      if (node.property && methodsWithResult.includes(node.property.name)) {
        if (!isResultUsed(node)) {
          context.report(node, noAssignmentMsg(node.property.name));
        }

        if (!callbackReturnsValue(node)) {
          context.report(node, noReturnMsg(node.property.name));
        }
      }
      if (node.property && methodsWithoutResult.includes(node.property.name)) {
        if (isResultUsed(node)) {
          context.report(node, assignmentMsg(node.property.name));
        }
      }
    };

    return {
      MemberExpression: checkArrayMethods
    }
  }
};

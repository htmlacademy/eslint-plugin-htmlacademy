const {isConstantName} = require('./case');

const findParentWithType = (node, type) => {
  let target = node.parent;

  while (target) {
    if (target.type === type) {
      break;
    }

    target = target.parent;
  }

  return target;
};

const hasUppercaseKey = (node) => {
  return (
    node.type === "Property" &&
      isConstantName(node.key.name)
  );
};

const isEnumerationObject = (node) => {
  return (
    node.type === "ObjectExpression" &&
      node.properties.every(hasUppercaseKey)
  );
};

module.exports = {
  findParentWithType,
  isEnumerationObject,
};

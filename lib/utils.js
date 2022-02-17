// lib/utils.js

const has = (obj, property, fn) => {
  const hasProperty = obj && typeof obj === "object" && obj.hasOwnProperty(property);
  if (typeof fn === "function") {
    return hasProperty && fn(obj[property]);
  } else if (typeof fn === "undefined") {
    return hasProperty;
  } else {
    const value = fn;
    return hasProperty && obj[property] === value;
  }
};

module.exports = {
  has
};

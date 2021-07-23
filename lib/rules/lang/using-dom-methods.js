// lib/rules/lang/using-dom-methods.js

const {createGetLang} = require("../../lang");

const ru = {
  getAttributeMsg(count) {
    return `getAttribute() должен получать 1 параметр, но получает ${count}`;
  },
  setAttributeMsg(count) {
    return `setAttribute() должен получать 2 параметра, но получает ${count}`;
  }
};

const en = {
  getAttributeMsg(count) {
    return `getAttribute() should have 1 argument, but has ${count}`;
  },
  setAttributeMsg(count) {
    return `setAttribute() should have 2 arguments, but has ${count}`;
  }
};

module.exports = {
  getLang: createGetLang(ru, en)
};

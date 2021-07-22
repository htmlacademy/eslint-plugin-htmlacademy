// lib/rules/lang/using-array-methods.js

const {createGetLang} = require("../../lang");

const ru = {
  noAssignmentMsg(name) {
    return `Результат Array.prototype.${name}() должен сохраняться в переменную или использоваться в последующем вызове`
  },
  assignmentMsg(name) {
    return `Результат Array.prototype.${name}() не должен сохраняться в переменную и использоваться в последующем вызове`
  },
  noReturnMsg(name) {
    return `Коллбэк, передаваемый в Array.prototype.${name}() должен возвращать значение`
  }
};

const en = {
  noAssignmentMsg(name) {
    return `Array.prototype.${name}() method should be used in assignment or in sequental call`
  },
  assignmentMsg(name) {
    return `Array.prototype.${name}() method should not be used in assignment or in sequental call`
  },
  noReturnMsg(name) {
    return `Array.prototype.${name}() method's callback should return a value`
  }
};

module.exports = {
  getLang: createGetLang(ru, en)
};

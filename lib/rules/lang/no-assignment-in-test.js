// lib/rules/lang/no-assignment-in-test.js

const {createGetLang} = require('../../lang');

const ru = {
  msg() {
    return "Присваивание не должно быть использовано в условии или аргументе вызова";
  }
};

const en = {
  msg() {
    return "Assignment should not be used in condition or call argument";
  }
};

module.exports = {
  getLang: createGetLang(ru, en)
};

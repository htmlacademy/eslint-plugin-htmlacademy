// lib/rules/lang/no-concat-in-literal.js

const {createGetLang} = require('../../lang');

const ru = {
  msg() {
    return `Конкатенация строк не должна использоваться в строковых литералах`;
  }
};

const en = {
  msg() {
    return `Template literal should not include concatenation`;
  }
};

const getLang = createGetLang(ru, en);

module.exports = {
  getLang
};


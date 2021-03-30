// lib/rules/lang/export-class-default.js
//
const {createGetLang} = require('../../lang');

const ru = {
  msg(name) {
    return `Класс «${name}» должен быть проэкспортирован через default`;
  }
};


const en = {
  msg(name) {
    return `Class «${name}» should be exported as default`;
  }
};

module.exports = {
  getLang: createGetLang(ru, en)
};


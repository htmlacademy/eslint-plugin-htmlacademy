// lib/rules/lang/export-let.js
//
const {createGetLang} = require('../../lang');

const ru = {
  msg(kind) {
    return `Тип объявления переменной «${kind}» не может быть использован в export`;
  }
};


const en = {
  msg(kind) {
    return `Declaration «${kind}» should not be used in export statement`;
  }
};

module.exports = {
  getLang: createGetLang(ru, en)
};

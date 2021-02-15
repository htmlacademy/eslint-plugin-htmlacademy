// lib/rules/lang/value-single-noun.js

const {createGetLang} = require('../../lang');

const ru = {
  paramMsg(name) {
    return `Имя параметра «${name}» должно быть существительным в единственном числе`;
  },

  catchMsg(name) {
    return `Имя параметра catch «${name}» должно быть существительным в единственном числе`;
  },

  declarationMsg(name) {
    return `Имя переменной «${name}» должно быть существительным в единственном числе`;
  }
};

const en = {
  paramMsg(name) {
    return `Parameter name «${name}» should be singular noun`;
  },

  catchMsg(name) {
    return `Catch parameter name «${name}» should be singular noun`;
  },

  declarationMsg(name) {
    return `Variable declaration name «${name}» should be singular noun`;
  }
};

module.exports = {
  getLang: createGetLang(ru, en)
};

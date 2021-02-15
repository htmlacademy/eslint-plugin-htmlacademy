// lib/rules/lang/class-enumeration-names.js

const {createGetLang} = require('../../lang');

const ru = {
  ctorMsg(name) {
    return `Имя конструктора «${name}» должно начинаться на букву верхнего регистра и быть существительным в единственном числе`;
  },
  classMsg(name) {
    return `Имя класса «${name}» должно начинаться на букву верхнего регистра и быть существительным в единственном числе`;
  },
  enumMsg(name) {
    return `Имя перечисления «${name}» должно начинаться на букву верхнего регистра и быть существительным в единственном числе`;
  }
};

const en = {
  ctorMsg(name) {
    return `Constructor name «${name}» should start with uppercase letter and be single noun`;
  },
  classMsg(name) {
    return `Class name «${name}» should start with uppercase letter and be single noun`;
  },
  enumMsg(name) {
    return `Enumeration name «${name}» should start with uppercase letter and be single noun`;
  }
};

module.exports = {
  getLang: createGetLang(ru, en)
};

// lib/rules/lang/function-starts-verb.js

const {createGetLang} = require('../../lang');

const ru = {
  msg(name) {
    return `Имя функции «${name}» не начинается с глагола`;
  }
};

const en = {
  msg(name) {
    return `Function name «${name}» does not start with verb`;
  }
};

module.exports = {
  getLang: createGetLang(ru, en)
};

// lib/rules/lang/no-boolean-return.js

const {createGetLang} = require('../../lang');

const ru = {
  msg() {
    return 'Оператор if может быть заменён на оператор return';
  }
};

const en = {
  msg() {
    return 'If statement may be replaced with return statement';
  }
};

const getLang = createGetLang(ru, en);

module.exports = {
  getLang
};


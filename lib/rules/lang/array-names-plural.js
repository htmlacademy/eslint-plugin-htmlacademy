// lib/rules/lang/array-names-plural.js

const {createGetLang} = require('../../lang');

const ru = {
  msg(name) {
    return `Имя массива «${name}» не является существительным во множественном числе`;
  }
};

const en = {
  msg(name) {
    return `Provided array name «${name}» is not plural noun`;
  }
};

const getLang = createGetLang(ru, en);

module.exports = {
  getLang
};

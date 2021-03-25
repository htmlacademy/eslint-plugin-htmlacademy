// lib/rules/lang/no-type-in-name.js

const {createGetLang} = require("../../lang");

const ru = {
  msg(name, type) {
    return 'Имя переменной «' + name + '» содержит имя типа «' + type + '»';
  }
};

const en = {
  msg(name, type) {
    return 'Variable name «' + name + '» includes type name «' + type + '»';
  }
};

module.exports = {
  getLang: createGetLang(ru, en)
};

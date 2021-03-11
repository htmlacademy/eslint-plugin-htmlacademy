// lib/rules/lang/no-property-name-duplication.js

const {createGetLang} = require("../../lang");

const ru = {
  msg(propertyName, objectName) {
    return 'Имя свойства ' + propertyName + ' включает в себя имя объекта: ' + objectName;
  }
};

const en = {
  msg(propertyName, objectName) {
    return 'Key ' + propertyName + ' includes object\'s name: ' + objectName;
  }
};

module.exports = {
  getLang: createGetLang(ru, en)
};

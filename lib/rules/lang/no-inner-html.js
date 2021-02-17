// lib/rules/lang/no-inner-html.js

const {createGetLang} = require('../../lang');

const ru = {
  assignmentMsg() {
    return `Допущено присвоение свойства innerHTML`;
  }
};

const en = {
  assignmentMsg() {
    return `Got assignment to property innerHTML`;
  }
};

module.exports = {
  getLang: createGetLang(ru, en)
};

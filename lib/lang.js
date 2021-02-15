// lib/lang.js

module.exports = {
  createGetLang(ru, en) {
    return ({options}) => {
      const [lang] = options;
      const useRuMessages = (
        lang && lang.lang === 'ru'
      );

      return (useRuMessages ? ru : en);
    };
  }
};

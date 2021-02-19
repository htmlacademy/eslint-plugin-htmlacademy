// lib/lang.js

module.exports = {
  createGetLang(ru, en) {
    return ({options}) => {
      const [{lang = 'en'} = {}] = options;
      const useRuMessages = (lang === 'ru');

      return (useRuMessages ? ru : en);
    };
  },
  schema: [
    {
      type: "object",
      properties: {
        lang: {
          type: "string"
        }
      }
    }
  ]
};

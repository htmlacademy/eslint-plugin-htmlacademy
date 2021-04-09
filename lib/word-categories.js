// lib/word-categories.js

"use strict";

/**
 * Synopsys
 *
 * const {extendWordCategories, isWord: isDefaultWord} = require("eslint-plugin-htmlacademy/lib/word-categories");
 * const {isWord: isExtendedWord} = extendWordCategories({alt: ["NN"]});
 *
 * console.log(isDefaultWord('alt')); // => false
 * console.log(isExtendedWord('alt')); // => true
 */

const defaultExceptions = {
  parameter: ['NN'],
  callback: ['NN'],
  template: ['NN'],
};

const extendWordCategories = (exceptions = {}) => {
  const gerunds = {};

  exceptions = {...defaultExceptions, ...exceptions};

  const {
    lexicon,
    wnNounExceptions: nounExceptions
  } = require('wink-lexicon');
  const gerundData = require('english-verbs-gerunds');

  for (let key in gerundData) {
    gerunds[gerundData[key]] = key;
  }

  const hasLexiconCategories = (...categories) => (word) => {
    const wordCategories = lexicon[word] || exceptions[word] || [];

    return (
      wordCategories &&
        !!categories.find((c) => wordCategories.includes(c))
    );
  };

  const isPluralNoun = (word) => (
    hasLexiconCategories('NNS')(word) ||
      word in nounExceptions
  );

  const isVerb = hasLexiconCategories('VB', 'VBZ');

  const isGerund = (word) => {
    const start = word.slice(0, word.length - 'ing'.length);
    return (isVerb(start) || word in gerunds);
  };

  const isWord = (word) => (
    word in lexicon ||
      word in exceptions
  );

  return {
    isNoun: hasLexiconCategories('NN', 'NNS'),
    isSingleNoun: hasLexiconCategories('NN'),
    isPluralNoun,
    isVerb,
    isVerbPast: hasLexiconCategories('VBD'),
    isGerund,
    isAdjective: hasLexiconCategories('JJ'),
    isWord
  };
};


module.exports = {
  ...extendWordCategories(),
  extendWordCategories
};

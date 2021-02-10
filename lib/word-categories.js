// lib/word-categories.js

"use strict";

const gerunds = {};

const {lexicon, wnNounExceptions: nounExceptions} = require('wink-lexicon');
const gerundData = require('english-verbs-gerunds');

for (let key in gerundData) {
  gerunds[gerundData[key]] = key;
}

const hasLexiconCategories = (...categories) => (word) => {
  const wordCategories = lexicon[word];

  return (
    wordCategories &&
      !!categories.find((c) => wordCategories.includes(c))
  );
};

const isPluralNoun = (word) => (
  hasLexiconCategories('NNS')(word) ||
    word in nounExceptions
);

const isVerb = hasLexiconCategories('VB');

const isGerund = (word) => {
  const start = word.slice(0, word.length - 'ing'.length);
  return (isVerb(start) || word in gerunds);
};

module.exports = {
  isNoun: hasLexiconCategories('NN', 'NNS'),
  isSingleNoun: hasLexiconCategories('NN'),
  isPluralNoun,
  isVerb,
  isVerbPast: hasLexiconCategories('VBD'),
  isGerund,
  isAdjective: hasLexiconCategories('JJ')
};

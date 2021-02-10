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

const isNoun = hasLexiconCategories('NN', 'NNS');

const isSingleNoun = hasLexiconCategories('NN');

const isPluralNoun = (word) => (
  hasLexiconCategories('NNS')(word) ||
    word in nounExceptions
);

const isVerb = hasLexiconCategories('VB');
const isVerbPast = hasLexiconCategories('VBD');

const isGerund = (word) => {
  const start = word.slice(0, word.length - 'ing'.length);
  return (isVerb(start) || word in gerunds);
};

const isAdjective = hasLexiconCategories('JJ');

module.exports = {
  isNoun,
  isSingleNoun,
  isPluralNoun,
  isVerb,
  isVerbPast,
  isGerund,
  isAdjective,
};

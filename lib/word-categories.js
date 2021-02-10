// lib/word-categories.js

"use strict";

const gerunds = {};

// const {N: nouns, V: verbs, A: adjectives} = require('categorized-words');
const nounExceptions = require('wink-lexicon/src/wn-noun-exceptions');
const {lexicon} = require('wink-lexicon');
const gerundData = require('english-verbs-gerunds');

for (let key in gerundData) {
  gerunds[gerundData[key]] = key;
}

const hasLexiconCategories = (word, ...categories) => {
  const wordCategories = lexicon[word];

  return (
    wordCategories &&
      !!categories.find((c) => wordCategories.includes(c))
  );
};

const isNoun = (word) => hasLexiconCategories(word, 'NN', 'NNS');

const isSingleNoun = (word) => hasLexiconCategories(word, 'NN');

const isPluralNoun = (word) => (
  hasLexiconCategories(word, 'NNS') ||
    word in nounExceptions
);

const isVerb = (word) => hasLexiconCategories(word, 'VB');
const isVerbPast = (word) => hasLexiconCategories(word, 'VBD');

const isGerund = (word) => {
  const start = word.slice(0, word.length - 'ing'.length);
  return (isVerb(start) || word in gerunds);
};

const isAdjective = (word) => hasLexiconCategories(word, 'JJ');

module.exports = {
  isNoun,
  isSingleNoun,
  isPluralNoun,
  isVerb,
  isVerbPast,
  isGerund,
  isAdjective,
};

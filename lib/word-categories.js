// lib/word-categories.js

"use strict";

const words = {};
const gerunds = {};

const {N: nouns, V: verbs, A: adjectives} = require('categorized-words');
const nounExceptions = require('wink-lexicon/src/wn-noun-exceptions');
const gerundData = require('english-verbs-gerunds');

const seemsLikePlural = (word) => (
  word.endsWith('s')
);

const addToWord = (word, obj) => {
  if (!words[word]) {
    words[word] = {};
  }
  Object.assign(words[word], obj);
};

for (let i = 0; i < nouns.length; i++) {
  const noun = nouns[i];

  const countKey = seemsLikePlural(noun) ? 'plural' : 'single';

  addToWord(noun, {
    noun: true,
    [countKey]: true
  });
}

for (let verb in gerundData) {
  const verbGerund = gerundData[verb];
  gerunds[verbGerund] = verb;
}

Object.keys(nounExceptions).forEach((plural) => {
  const single = nounExceptions[plural];

  addToWord(single, {noun: true, single: true});
  addToWord(plural, {noun: true, plural: true});
});

for (let adjective in adjectives) {
  addToWord(adjective, {adjective: true});
}

const isSingleNoun = (word) => (
  words[word] && words[word].noun && words[word].single
);

const isPluralNoun = (word) => (
  words[word] && words[word].noun && words[word].plural
);

for (let i = 0; i < verbs.length; i++) {
  addToWord(verbs[i], {verb: true});
}

const isVerb = (word) => (
  words[word] && words[word].verb
);

const isGerund = (word) => {
  const start = word.slice(0, word.length - 'ing'.length);
  return (isVerb(start) || word in gerunds);
};

const isAdjective = (word) => {
  return words[word] && words[word].adjective;
};

module.exports = {
  isSingleNoun,
  isPluralNoun,
  isVerb,
  isGerund,
  isAdjective,
};

// lib/word-categories.js

"use strict";

const {N: nouns, V: verbs} = require('categorized-words');
const words = {};

const nounExceptions = require('wink-lexicon/src/wn-noun-exceptions');

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

Object.keys(nounExceptions).forEach((plural) => {
  const single = nounExceptions[plural];

  addToWord(single, {noun: true, single: true});
  addToWord(plural, {noun: true, plural: true});
});

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

module.exports = {
  isSingleNoun,
  isPluralNoun,
  isVerb,
};

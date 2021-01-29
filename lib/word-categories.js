// lib/word-categories.js

"use strict";

// eslint-disable-next-line no-unused-vars

const {N: nouns, V: verbs} = require('categorized-words');
const words = {};

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

  addToWord(noun, {
    noun: true,
    single: true
  });

  if (i < nouns.length - 1) {
    const pluralNoun = nouns[i + 1];

    if (pluralNoun.startsWith(noun) && seemsLikePlural(pluralNoun)) {
      addToWord(pluralNoun, {
        noun: true,
        plural: true
      });
      i++;
    }
  }
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

module.exports = {
  isSingleNoun,
  isPluralNoun,
  isVerb,
};

// tests/lib/word-categories.js

const {expect} = require('chai');
const {
  isGerund,
  isSingleNoun,
  isWord,
} = require("../../lib/word-categories");

describe('isGerund()', () => {
  it('should return true for «watching»', () => {
    expect(isGerund('watching')).to.eq(true);
  });

  it('should return true for «getting»', () => {
    expect(isGerund('getting')).to.eq(true);
  });

  it('should return false for «greencheesing»', () => {
    expect(isGerund('greencheesing')).to.eq(false);
  });
});

describe('isSingleNoun()', () => {
  it('should return true for knife', () => {
    expect(isSingleNoun('knife')).to.eq(true);
  });

  it('should return false for knives', () => {
    expect(!!isSingleNoun('knives')).to.eq(false);
  });

  it('should return true for status', () => {
    expect(isSingleNoun('status')).to.eq(true);
  });

  it('should return true for callback', () => {
    expect(isSingleNoun('callback')).to.eq(true);
  });

  it('should return true for parameter', () => {
    expect(isSingleNoun('parameter')).to.eq(true);
  });
});

describe('isWord()', () => {
  it('should return true for nouns', () => {
    expect(isWord('name')).to.eq(true);
    expect(isWord('names')).to.eq(true);
  });

  it('should return true for verbs', () => {
    expect(isWord('go')).to.eq(true);
    expect(isWord('went')).to.eq(true);
    expect(isWord('gone')).to.eq(true);
  });

  it('should return true even for particles', () => {
    expect(isWord('for')).to.eq(true);
  });

  it('should return false for wrong words', () => {
    expect(isWord('ffffff')).to.eq(false);
  });
});

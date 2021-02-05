// tests/lib/word-categories.js

const {expect} = require('chai');
const {isGerund} = require("../../lib/word-categories");

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

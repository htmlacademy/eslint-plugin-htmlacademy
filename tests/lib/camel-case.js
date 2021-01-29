// tests/lib/camel-case.js

const {expect} = require('chai');
const {splitCamelCase} = require('../../lib/camel-case');

describe('splitCamelCase()', () => {
  it('should be a function', () => {
    expect(splitCamelCase).to.be.a('function');
  });

  it('should return lowercase identifier without changes', () => {
    expect(splitCamelCase('hello')).to.deep.eq(['hello']);
  });

  it('should split camelcased name', () => {
    expect(splitCamelCase('helloWorld')).to.deep.eq(['hello', 'world']);
  });

  it('should split uppercase part', () => {
    // TODO: fix up hanging here
    expect(splitCamelCase('fooBZ')).to.deep.eq(['foo', 'b', 'z']);
  });
});

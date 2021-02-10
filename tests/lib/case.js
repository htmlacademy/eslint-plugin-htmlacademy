// tests/lib/case.js

const {expect} = require('chai');
const {
  splitCamelCase,
  isConstantName,
} = require('../../lib/case');

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

  it('should split camelcased name with three parts', () => {
    expect(splitCamelCase('fooBarBaz')).to.deep.eq(['foo', 'bar', 'baz']);
  });

   it('should split uppercase part', () => {
     expect(splitCamelCase('fooBZ')).to.deep.eq(['foo', 'b', 'z']);
   });

   it('should split regarding options', () => {
     expect(
       splitCamelCase('FooBarBaz', {
         upperStart: true
       })).to.deep.eq(['foo', 'bar', 'baz']);

     expect(splitCamelCase('Foo', {upperStart: true})).to.deep.eq(['foo']);
   });
});

describe('isConstantName()', () => {
  it('should be a function', () => {
    expect(isConstantName).to.be.a('function');
  });

  it('should return true for FOO_BAR', () => {
    expect(isConstantName('FOO_BAR')).to.eq(true);
  });

  it('should return false for fooBar', () => {
    expect(isConstantName('fooBar')).to.eq(false);
  });
});

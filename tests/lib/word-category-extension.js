// tests/lib/word-category-extension.js

const {expect} = require('chai');
const {extendWordCategories, isNoun} = require('../../lib/word-categories');

describe('extendWordCategories()', () => {
  it('should be a function', () => {
    expect(extendWordCategories).to.be.a('function');
  });

  context('without extensions', () => {
    let categories;

    before(() => {
      categories = extendWordCategories();
    });

    it('should not use extensions', () => {
      const {isNoun: isExtendedNoun} = categories;

      expect(isExtendedNoun('barbershop')).to.eq(false);
    });
  });

  context('with extensions', () => {
    let categories;

    before(() => {
      categories = extendWordCategories({
        barbershop: ['NN']
      });
    });

    it('should use extensions', () => {
      const {isNoun: isExtendedNoun} = categories;
      expect(isExtendedNoun('barbershop')).to.eq(true);
      expect(isNoun('barbershop')).to.eq(false);
    });

    it('should accept default exceptions', () => {
      const {isNoun: isExtendedNoun} = categories;
      expect(isExtendedNoun('parameter')).to.eq(true);
    });
  });
});

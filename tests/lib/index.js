// tests/lib/index.js

const fs = require("fs");
const {join} = require("path");

const dirPath = join(__dirname, "../../lib/rules");
const {rules} = require("../..");

const {expect} = require("chai");

const isEslintRule = (object) => {
  return (
    typeof object.meta === 'object' &&
      typeof object.create === 'function'
  );
};

describe("all rules are exported", () => {
  const dir = fs.opendirSync(dirPath);
  let entry = dir.readSync();

  while(entry) {
    const {name} = entry;
    if (name.endsWith('.js')) {
      const ruleName = name.slice(0, -3);
      const rule = rules[ruleName];

      it(`«${ruleName}» should be a rule`, () => {
        expect(isEslintRule(rule)).to.eq(true);
      });
    }
    entry = dir.readSync();
  }

  dir.closeSync();
});

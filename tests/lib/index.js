// tests/lib/index.js

const fs = require("fs");
const {join} = require("path");

const dirPath = join(__dirname, "../../lib/rules");
const {rules} = require("../..");

const {expect} = require("chai");

describe("all rules are exported", () => {
  const dir = fs.opendirSync(dirPath);
  let entry = dir.readSync();

  while(entry) {
    const {name} = entry;
    if (name.endsWith('.js')) {
      const ruleName = name.slice(0, -3);

      it(`should export «${ruleName}» rule`, () => {
        expect(typeof rules[ruleName]).to.eq('object');
      });
    }
    entry = dir.readSync();
  }

  dir.closeSync();
});

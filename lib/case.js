// lib/case.js

const upcasedLetter = /[A-Z]/;
const secondUpcasedLetter = /[A-Z][a-z]*[A-Z]/;

const splitCamelCase = (camelcaseString, {upperStart = false} = {}) => {
  const result = [];

  const startRegex = upperStart ? secondUpcasedLetter : upcasedLetter;
  let md = startRegex.exec(camelcaseString);
  let lastIndex = 0;

  const getNextIndex = (md) => (
    lastIndex + md.index + md[0].length - 1
  );

  while(md) {
    const index = getNextIndex(md);

    result.push(camelcaseString.slice(
      lastIndex,
      index
    ).toLowerCase());

    lastIndex = index;

    md = secondUpcasedLetter.exec(
      camelcaseString.slice(lastIndex)
    );
  }

  result.push(
    camelcaseString.slice(lastIndex).toLowerCase()
  );

  return result;
};

const constantRegexp = /^([A-Z]+)(_[A-Z]+)*$/;

const isConstantName = (name) => (
  constantRegexp.test(name)
);

module.exports = {
  splitCamelCase,
  isConstantName,
};

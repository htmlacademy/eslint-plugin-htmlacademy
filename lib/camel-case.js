// lib/camel-case.js

const upcasedLetter = /[A-Z]/;
const secondUpcasedLetter = /[A-Z][a-z]*[A-Z]/;

const splitCamelCase = (camelcaseString) => {
  const result = [];

  let md = upcasedLetter.exec(camelcaseString);
  let lastIndex = 0;

  while(md) {
    const index = md.index;

    result.push(camelcaseString.slice(
      lastIndex,
      index
    ).toLowerCase());

    lastIndex = index;

    md = secondUpcasedLetter.exec(
      camelcaseString.slice(index)
    );
  }

  result.push(
    camelcaseString.slice(lastIndex).toLowerCase()
  );

  return result;
};

module.exports = {
  splitCamelCase,
};

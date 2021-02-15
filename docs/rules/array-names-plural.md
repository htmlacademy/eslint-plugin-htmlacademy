# Array names should be plural nouns (array-names-plural)

Variables that are initialized with array literals
or properties in objects that have array literal value
should have name that is plural noun, starting with lowercase letter.

## Rule Details

Examples of **incorrect** code for this rule:

```js
// Array name is single noun
const cat = [];

// Array name is not a noun at all
const baz = [];

// Array property name is a single noun
const object = {
  friend: [1, 2, 3]
};
```

Examples of **correct** code for this rule:

```js
// Array name is single noun
const cats = [];

// Array property name is a single noun
const object = {
  friends: [1, 2, 3]
};
```

### Options

```js
// Using that option you will get russian error messages
["error", {lang: "ru"}];
```

## When Not To Use It

Do not use this rule unless in htmlacademy intensives or in htmlacademy task-check.

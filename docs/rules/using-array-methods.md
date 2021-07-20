# Array methods should be used in a right way

 * `Array.prototype.map` should be used as a right part of assignment. Used callback should return a value.
 * `Array.prototype.forEach` should not be used as a right part of assignment. Used callback should not return a value.

## Rule Details

Examples of **incorrect** code for this rule:

```js
// Map value should be stored
const names = [];
objects.map((o) => names.push(o.name));

// forEach value should not be stored
// forEach callback should not return value
const result = objects.forEach((o) => {
  return o.greet();
});
```

Examples of **correct** code for this rule:

```js
// Map value should be stored
const names = objects.map((o) => o.name);

// forEach value should not be stored
// forEach callback should not return value
objects.forEach((o) => {
  o.greet();
});
```
### Options

```js
// Using that option you will get russian error messages
["error", {lang: "ru"}];
```

## When Not To Use It

Do not use this rule unless in htmlacademy intensives or in htmlacademy task-check.

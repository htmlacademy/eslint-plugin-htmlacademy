# Concatenation should not be used inside string literals (no-concat-in-literal)

## Rule Details

Examples of **incorrect** code for this rule:

```js
const name = `Mr. ${bond + " James " + bond}`;
```

Examples of **correct** code for this rule:

```js
const name = `Mr. ${bond} James ${bond}`;
```

### Options

```js
// Using that option you will get russian error messages
["error", {lang: "ru"}];
```

## When Not To Use It

Do not use this rule unless in htmlacademy intensives or in htmlacademy task-check.

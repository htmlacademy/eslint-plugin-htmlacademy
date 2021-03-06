# Should not return true/false from if/else (no-boolean-return)

All `if` statements, returning `true` from first branch and `false`
from alternative branch, should be replaced with `return` statement.


## Rule Details

Examples of **incorrect** code for this rule:

```js
const compareTo5 = (value) => {
  if (value === 5) {
    return true;
  } else {
    return false;
  }
};
```

Examples of **correct** code for this rule:

```js
const compareTo5 = (value) => {
  return (value === 5);
};
```

### Options

```js
// Using that option you will get russian error messages
["error", {lang: "ru"}];
```

## When Not To Use It

Do not use this rule unless in htmlacademy intensives or in htmlacademy task-check.


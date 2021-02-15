# Function/method name should start with verb (function-starts-verb)

Variable declarations, function declarations that are not initialized
with function with this expression should have name that
starts with verb and starts with lowercase letter.

## Rule Details

Examples of **incorrect** code for this rule:

```js
// Function name is not a verb
const foo = () => null;

// Method name is not a verb
const obj = { baz() {} };

// Method definition is not a verb
class Human {
  baz() {}
}
```

Examples of **correct** code for this rule:

```js
// Function name starts with verb "get"
const getName = () => name;

// Method name "constructor" is an exception
class Human { constructor() {} }
```

### Options

```js
// Using that option you will get russian error messages
["error", {lang: "ru"}];
```

## When Not To Use It

Do not use this rule unless in htmlacademy intensives or in htmlacademy task-check.


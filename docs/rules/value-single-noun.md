# Value name should be single noun (value-single-noun)

Variable declaration names, function parameters or catch clause parameters
should have name that is single noun and starts with lowercase letter.

## Rule Details

Examples of **incorrect** code for this rule:

```js
// Variable name is not noun
let x1 = 5;

// Parameter name is not noun
const check = (arg1) => null;

// Catch clause parameter name is not single noun
try {} catch (arg) {}

// Variable declarator in for() is not single noun nor it is one of exceptions
for (let x1 = 0; x1 < 100; x1++) {}
```

Examples of **correct** code for this rule:

```js
// Variable name is single noun
const name = 'Value';

// Function parameter name is noun
function check(name) {}

// Catch clause parameter is err (it is one of exceptions in this case)
try {} catch(err) {}

// Index variable may have name i, j, k...
for (let i = 0; i < 10; i++) {}
```

### Options

```js
// Using that option you will get russian error messages
["error", {lang: "ru"}];
```

## When Not To Use It

Do not use this rule unless in htmlacademy intensives or in htmlacademy task-check.


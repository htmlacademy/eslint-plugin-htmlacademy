# Class/enumeration name should be noun starting with upcase letter (class-enumeration-names)

Class names (that may be function name with this expression inside)
and enumeration names (variables, initialized with object, that have
keys with all-caps names, like "OK" or "NOT\_FOUND")


## Rule Details

Examples of **incorrect** code for this rule:

```js
// Function name starts with lowercase letter
//
const human = function () { this.name = "John"; };

// Function name is not a single noun
//
function Bazz () { this.name = "Alien"; };

// Class name starts with lowercase letter
class job {
}

// Enumeration name starts with lowercase letter
//
const status = {
  OK: 200,
  NOT_FOUND: 404
};
```

Examples of **correct** code for this rule:

```js
// Function name is correct
//
const Human = function () { this.name = "John"; };

// Function name is correct
//
function Predator() { this.name = "Alien"; };

// Enumeration name is correct
//
const Status = {
  OK: 200,
  NOT_FOUND: 404
};
```

### Options

```js
// Using that option you will get russian error messages
["error", {lang: "ru"}];
```

## When Not To Use It

Do not use this rule unless in htmlacademy intensives or in htmlacademy task-check.


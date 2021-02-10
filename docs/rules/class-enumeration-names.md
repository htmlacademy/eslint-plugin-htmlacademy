# Class/enumeration name should be noun starting with upcase letter (class-enumeration-names)

Please describe the origin of the rule here.


## Rule Details

This rule aims to...

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

If there are any options, describe them here. Otherwise, delete this section.

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.

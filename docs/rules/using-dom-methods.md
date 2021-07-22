# DOM methods should be used in a right way

 * `Element.prototype.setAttribute` should receive two parameters
 * `Element.prototype.getAttribute` should receive one parameter

## Rule Details

Examples of **incorrect** code for this rule:

```js
// No attributes
el.getAttribute();

// Two attributes
el.getAttribute('a', 'b');

// Set attributes with one parameter
el.setAttribute('a');
```

Examples of **correct** code for this rule:

```js
// One attribute
el.getAttribute('a');

// Two attributes for setAttribute
el.setAttribute('a', 'b');
```

### Options

```js
// Using that option you will get russian error messages
["error", {lang: "ru"}];
```

## When Not To Use It

Do not use this rule unless in htmlacademy intensives or in htmlacademy task-check.

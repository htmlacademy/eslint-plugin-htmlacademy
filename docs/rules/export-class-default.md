# Class should be exported only as default (export-class-default)

If module exports a class it should be exported as `export default`.

## Rule Details

Examples of **incorrect** code for this rule:

```js
// Named export
export class Foo {}
```

Examples of **correct** code for this rule:

```js
// 1
class Foo {}
export default Foo;

// 2
export default class Bar {}
```

### Options

```js
// Using that option you will get russian error messages
["error", {lang: "ru"}];
```

## When Not To Use It

Do not use this rule unless in htmlacademy intensives or in htmlacademy task-check.

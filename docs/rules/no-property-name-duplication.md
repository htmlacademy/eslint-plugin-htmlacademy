# Property name should not contain object&#39;s name (no-property-name-duplication)

Properties in variable initialization object should not include
variable name.

## Rule Details

Examples of **incorrect** code for this rule:

```js
const wizard = {
  // Property name contains "wizard"
  wizardName: 'Pendalf',

  // Method name contains "wizard"
  getWizardAge() {
    return 35;
  }
};
```

Examples of **correct** code for this rule:

```js
const wizard = {
  name: 'Pendalf',
  getAge() {
    return 35;
  }
};

```

### Options

```js
// Using that option you will get russian error messages
["error", {lang: "ru"}];
```

## When Not To Use It

Do not use this rule unless in htmlacademy intensives or in htmlacademy task-check.


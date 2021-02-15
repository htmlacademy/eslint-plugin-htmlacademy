# eslint-plugin-htmlacademy

Rules collection for javascript intensives

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-htmlacademy`:

```
$ npm install eslint-plugin-htmlacademy --save-dev
```


## Usage

Add `htmlacademy` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "htmlacademy"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "htmlacademy/array-names-plural": 1,
        "htmlacademy/class-enumeration-names": 1,
        "htmlacademy/function-starts-verb": 1,
        "htmlacademy/value-single-noun": 1
    }
}
```

## Supported Rules

 * Array names should be plural nouns (array-names-plural)
 * Class/enumeration name should be noun starting with uppercase letter (class-enumeration-names)
 * Function/method name should start with verb (function-starts-verb)
 * Value name should be single noun (value-single-noun)

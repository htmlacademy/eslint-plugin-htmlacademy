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
        "htmlacademy/array-names-plural": 2
    }
}
```

## Supported Rules

* Fill in provided rules here

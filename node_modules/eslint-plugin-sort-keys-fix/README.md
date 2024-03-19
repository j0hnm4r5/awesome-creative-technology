# eslint-plugin-sort-keys-fix

Fork of eslint rule that sorts keys in objects (https://eslint.org/docs/rules/sort-keys) with autofix enabled

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-sort-keys-fix`:

```
$ npm install eslint-plugin-sort-keys-fix --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-sort-keys-fix` globally.

## Usage

Add `sort-keys-fix` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "sort-keys-fix"
  ]
}
```


Then add sort-keys-fix rule under the rules section.

```json
{
    "rules": {
        "sort-keys-fix/sort-keys-fix": "warn"
    }
}
```

Often it makes sense to enable `sort-keys-fix` only for certain files/directories. For cases like that, use override key of eslint config:

```jsonc
{
  "rules": {
    // ...
  },
  "overrides": [
    {
      "files": ["src/alphabetical.js", "bin/*.js", "lib/*.js"],
      "rules": {
        "sort-keys-fix/sort-keys-fix": "warn"
      }
    }
  ]
}
```

## Rule configuration

For available config options, see [official sort-keys reference](https://eslint.org/docs/rules/sort-keys#require-object-keys-to-be-sorted-sort-keys). All options supported by `sort-keys`, besides `minKeys`, are supported by `sort-keys-fix`.






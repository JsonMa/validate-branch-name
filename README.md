# validate-branch-name

Git branch name validator through hooks.

## Description

**validate-branch-name** is based on [Husky](https://github.com/typicode/husky), so make sure that your repository have installed husky (**version newer than v1.0.0**) successfully.

<!--
Description here.
-->

## Install

```bash
$ npm i validate-branch-name --save-dev
```

## Usage

**Configure hooks and pattern using package.json.**

"validate-branch-name" attribute in package.json is optional, we have set default pattern and errorMsg in project. But you can still defined them as you like.

```js
// {app_root}/package.json
{
  "husky": {
    "hooks": {
      "pre-push": "validate-branch-name"
    }
  },
  "validate-branch-name": {
    "pattern": "^(master|develop){1}$|^(feature|fix|hotfix|release)\/.+$",
    "errorMsg": "your own error message"
  }
}
```

**Default pattern: ^(master|develop){1}$|^(feature|fix|hotfix|release)\/.+$**

**Example: feature/test/pattern-test**

**Avaliable patterns:**

- ^(feature|fix|hotfix|release)\/.+ - branch has to start with _feature/, fix/, release/ or hotfix/_

* (feature|release|hotfix)\/(JIRA-\d+) - it should look like _feature/JIRA-1234_

- (feature|release|hotfix)\/(JIRA-\d+\/)?[a-z-]+ - it should look like _feature/branch-name_ or include JIRA's code like _feature/JIRA-1234/branch-name_

**You can also configure hooks and pattern using `.validate-branch-namerc`, `.validate-branch-namerc.json` or `.validate-branch-name.js` file.**

## Requirements

1. Husky requires Node `>= 8.6.0` and Git `>= 2.13.2`
2. Husky version should be newer than 1.0.0

## Questions & Suggestions

Please open an issue [here](https://github.com/JsonMa/validate-branch-name/issues).

## License

[MIT](LICENSE)

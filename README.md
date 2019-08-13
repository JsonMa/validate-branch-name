# validate-branch-name
Git branch name validator

## Description
**validate-branch-name** is baded on husky, so make sure that you have installed husky

<!--
Description here.
-->

## Install

```bash
$ npm i validate-branch-name --save-dev
```

## Usage

```js
// {app_root}/package.json
{
  "husky": {
    "hooks": {
      "pre-push": "validate-branch-name"
    }
  },
  "validate-branch-name": {
    "pattern": '^master|develop|(feature|fix|hotfix|release)\/.+',
  }
}
```

**Default pattern: ^master|develop|(feature|fix|hotfix|release)\/.+**

**Avaliable patterns:**

  ^(feature|fix|hotfix|release)\/.+ - branch has to start with feature/, fix/, release/ or hotfix/

  (feature|release|hotfix)\/(JIRA-\d+) - it should look like feature/JIRA-1234

  (feature|release|hotfix)\/(JIRA-\d+\/)?[a-z-]+ - it should look like feature/branch-name or include JIRA's code like feature/JIRA-1234/branch-name
## Questions & Suggestions

Please open an issue [here](https://github.com/JsonMa/validate-branch-name/issues).

## License

[MIT](LICENSE)

# validate-branch-name

![validate-branch-name](https://socialify.git.ci/JsonMa/validate-branch-name/image?description=1&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light)

[English Document](https://github.com/JsonMa/validate-branch-name/blob/master/README.md)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/JsonMa/validate-branch-name/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/validate-branch-name.svg?style=flat)](https://www.npmjs.com/package/validate-branch-name)
[![Build Status](https://www.travis-ci.org/JsonMa/validate-branch-name.svg?branch=master)](https://www.travis-ci.org/JsonMa/validate-branch-name)
[![codecov](https://codecov.io/gh/JsonMa/validate-branch-name/branch/master/graph/badge.svg)](https://codecov.io/gh/JsonMa/validate-branch-name)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/JsonMa/validate-branch-name/pulls)
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[snyk-image]: https://snyk.io/test/npm/validate-branch-name/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/validate-branch-name
[download-image]: https://img.shields.io/npm/dm/validate-branch-name.svg?style=flat-square
[download-url]: https://npmjs.org/package/validate-branch-name

[中文文档](https://github.com/JsonMa/validate-branch-name/blob/master/README.zh-CN.md)

Git branch name validator through hooks.

## Description

**validate-branch-name** is based on [Husky](https://github.com/typicode/husky), so make sure that your repository have installed husky (**version >= v1.0.0**) successfully.

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

**Example:** `feature/test/pattern-test` would be passed.

**Avaliable patterns:**

- ^(feature|fix|hotfix|release)\/.+ - branch has to start with _feature/, fix/, release/ or hotfix/_

* (feature|release|hotfix)\/(JIRA-\d+) - it should look like _feature/JIRA-1234_

- (feature|release|hotfix)\/(JIRA-\d+\/)?[a-z-]+ - it should look like _feature/branch-name_ or include JIRA's code like _feature/JIRA-1234/branch-name_

**You can also configure hooks and pattern using `.validate-branch-namerc`, `.validate-branch-namerc.json` or `.validate-branch-namerc.js` file.**

## Requirements

1. Husky requires Node `>= 8.6.0` and Git `>= 2.13.2`
2. Husky version `>=  1.0.0`

## Questions & Suggestions

Please open an issue [here](https://github.com/JsonMa/validate-branch-name/issues).

## License

[MIT](LICENSE)

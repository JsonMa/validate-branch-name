# validate-branch-name

<p align="center">
  <a href="https://nextjs.org">
    <img src="https://github.com/JsonMa/validate-branch-name/blob/master/logo_transparent.png?raw=true" height="450px" style="margin: -150px 0">
  </a>
</p>

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

Git branch name validator.

## Description

**validate-branch-name** can be used through command line directly. When used with [Husky](https://github.com/typicode/husky), you should make sure husky version >= v1.0.0.

<!--
Description here.
-->

## Install

```bash
$ npm i validate-branch-name --save-dev

```

## Usage

**Use through command line**

```shell

npx validate-branch-name

```

**Use with husky**

**First way:**

Configure hooks and pattern using package.json.

```js
// {app_root}/package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "validate-branch-name"
    }
  },
  "validate-branch-name": {
    "pattern": "^(master|develop){1}$|^(feature|fix|hotfix|release)\/.+$",
    "errorMsg": "your own error message"
  }
}
```

**Second way:**

Define [pre-commit](https://github.com/JsonMa/validate-branch-name/blob/master/example/pre-commit) file under `.husky` direcotory.

```json

#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# valite branch name before commit

npx validate-branch-name 

```

**We have set pattern and errorMsg by default。But you can still defined them as you like.**

**Default pattern: ^(master|develop){1}$|^(feature|fix|hotfix|release)\/.+$**

**Example:** `feature/test/pattern-test` would be passed.

**Avaliable patterns:**

- ^(feature|fix|hotfix|release)\/.+ - branch has to start with _feature/, fix/, release/ or hotfix/_

* (feature|release|hotfix)\/(JIRA-\d+) - it should look like _feature/JIRA-1234_

- (feature|release|hotfix)\/(JIRA-\d+\/)?[a-z-]+ - it should look like _feature/branch-name_ or include JIRA's code like _feature/JIRA-1234/branch-name_

**You can also use `.validate-branch-namerc`, `.validate-branch-namerc.json` or `.validate-branch-namerc.js` file to define config.**


## Questions & Suggestions

Please open an issue [here](https://github.com/JsonMa/validate-branch-name/issues).

## License

[MIT](LICENSE)

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
![npm](https://img.shields.io/npm/dt/validate-branch-name)

[snyk-image]: https://snyk.io/test/npm/validate-branch-name/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/validate-branch-name
[download-image]: https://img.shields.io/npm/dm/validate-branch-name.svg?style=flat-square
[download-url]: https://npmjs.org/package/validate-branch-name


[English Document](https://github.com/JsonMa/validate-branch-name/blob/master/README.md)

Git分支名校验工具，规范项目的分支命令。

## 描述

**validate-branch-name** 可通过命令行直接使用。当结合 [Husky](https://github.com/typicode/husky)一起使用时，请确保Husky的版本 **>= v1.0.0**.

<!--
Description here.
-->

## 安装


```bash
# 项目本地安装
$ npm i validate-branch-name -D

# 全局安装
$ npm i validate-branch-name -g

```

## 使用

**命令行方式使用**
```shell

npx validate-branch-name

# 测试目标分支名
npx validate-branch-name -t test/branch/name

# 定义用于校验分支名的正则表达式
npx validate-branch-name -r regexp -t test/branch/name

# 通过 -h 获取更多帮助信息
npx validate-branch-name -h

```

**结合husky使用**

方式一：在根目录下的package.json文件中，配置husky及validate-branch-name。

```js
// {app_root}/package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "npx validate-branch-name"
    }
  },
  "validate-branch-name": {
    "pattern": "^(master|main|develop){1}$|^(feature|fix|hotfix|release)\/.+$",
    "errorMsg": "自定义的错误信息"
  }
}
```

方式二：在`.husky`目录下增加[pre-commit](https://github.com/JsonMa/validate-branch-name/blob/master/example/pre-commit) ，配合husky git钩子来校验分支名。

```shell

#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# valite branch name before commit

npx validate-branch-name 

```
**我们已经为您添加了默认的配置，但是您依然可以根据自己的喜好自定义校验规则和错误信息。**

**默认的校验规则: ^(master|main|develop){1}$ |^(feature|fix|hotfix|release)\/.+$**

**例子:** 分支名`feature/test/pattern-test`将会通过校验 .

**可选择的校验规则:**

- ^(feature|fix|hotfix|release)\/.+ -- 分支名应该以 _feature/, fix/, release/_ 或 _hotfix/_ 开始

* (feature|release|hotfix)\/(JIRA-\d+) -- 分支名应当例如 _feature/JIRA-1234_

- (feature|release|hotfix)\/(JIRA-\d+\/)?[a-z-]+ -- 分支名应当例如 _feature/branch-name_ 或者 _feature/JIRA-1234/branch-name_

- 自定义正则表达式，访问[regex](https://extendsclass.com/regex/a3fe16a)。

**除了在package.json中定义，还能以文件 `.validate-branch-namerc`，`.validate-branch-namerc.json`，`.validate-branch-namerc.yaml`，`.validate-branch-namerc.yml`， `.validate-branch-namerc.js`， `.validate-branch-namerc.cjs`，
`validate-branch-name.config.js` 或 `validate-branch-name.config.cjs`的形式配置validate-branch-name。**


## 疑问及建议

请通过[issue](https://github.com/JsonMa/validate-branch-name/issues)进行提问。

## 证书

[MIT](LICENSE)

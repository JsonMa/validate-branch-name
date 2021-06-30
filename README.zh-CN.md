# validate-branch-name

![validate-branch-name](https://socialify.git.ci/JsonMa/validate-branch-name/image?description=1&forks=1&issues=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light)

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

[English Document](https://github.com/JsonMa/validate-branch-name/blob/master/README.md)

Git分支名校验工具，规范项目的分支命令。

## 描述

**validate-branch-name** 依赖了 [Husky](https://github.com/typicode/husky), 因此在使用前需要确保你已经安装好了[Husky](https://github.com/typicode/husky)且版本号 **>= v1.0.0**.

<!--
Description here.
-->

## 安装

```bash
$ npm i validate-branch-name --save-dev
```

## 使用

**在根目录下的package.json文件中，增加husky及validate-branch-name的配置**

其中，"validate-branch-name"的属性是可选的，在工具中我们已经为您添加了默认的配置，但是您依然可以根据自己的喜好自定义校验规则和错误信息。

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
    "errorMsg": "自定义的错误信息"
  }
}
```

**默认的校验规则: ^(master|develop){1}$ |^(feature|fix|hotfix|release)\/.+$**

**例子:** 分支名`feature/test/pattern-test`将会通过校验 .

**可选择的校验规则:**

- ^(feature|fix|hotfix|release)\/.+ -- 分支名应该以 _feature/, fix/, release/_ 或 _hotfix/_ 开始

* (feature|release|hotfix)\/(JIRA-\d+) -- 分支名应当例如 _feature/JIRA-1234_

- (feature|release|hotfix)\/(JIRA-\d+\/)?[a-z-]+ -- 分支名应当例如 _feature/branch-name_ 或者 _feature/JIRA-1234/branch-name_

**除了在package.json中定义，还能以文件 `.validate-branch-namerc`、`.validate-branch-namerc.json` 或 `.validate-branch-name.js` 的形式配置validate-branch-name。**

## 依赖

1. Husky 依赖的 Node 版本`>= 8.6.0` 以及 Git 版本 `>= 2.13.2`
2. Husky 版本 `>=  1.0.0`

## 疑问及建议

请通过[issue](https://github.com/JsonMa/validate-branch-name/issues)进行提问。

## 证书

[MIT](LICENSE)

# validate-branch-name
Git branch name validator

## Description
**validate-branch-name** is baded on husky,so make sure that you have installed husky
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-city.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-city
[travis-image]: https://img.shields.io/travis/eggjs/egg-city.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-city
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-city.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-city?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-city.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-city
[snyk-image]: https://snyk.io/test/npm/egg-city/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-city
[download-image]: https://img.shields.io/npm/dm/egg-city.svg?style=flat-square
[download-url]: https://npmjs.org/package/validate-branch-name

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
      "pre-push": "echo $HUSKY_GIT_PARAMS"
    }
  },
  "validate-branch-name": {
      ""
  }
}
```

## Example

```js
// {app_root}/app/controller/home.js
'use strict';
class HomeController extends app.Controller {
  async index() {
    /**
     * 获取城市信息
     * @method fetch
     * @param {String} province 省名称
     * @param {String} city 市名称
     * @returns {Array} 返回省份/市/区县信息
     * @memberof City
     */
    const cityInfo = await this.service.city.fetch('四川省', '成都市');
  }
}
module.exports = HomeController;
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)

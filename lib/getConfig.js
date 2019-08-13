'use strict';
const cosmiconfig = require('cosmiconfig');
const defaultConfig = require('../config/config.default');

module.exports = {
  getConf(dir = null) {
    const explorer = cosmiconfig('validate-branch-name');
    const {
      config = {},
    } = explorer.searchSync(dir) || {};

    return Object.assign(defaultConfig, config);
  },
};

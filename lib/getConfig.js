'use strict';
const { cosmiconfigSync } = require('cosmiconfig');
const defaultConfig = require('../config/config.default');

module.exports = {
  getConf(searchFrom, cosmiconfigOptions) {
    const explorerSync = cosmiconfigSync('validate-branch-name', cosmiconfigOptions);
    const {
      config = {},
    } = explorerSync.search(searchFrom || process.cwd()) || {};
    return Object.assign({}, defaultConfig, config);
  },
};

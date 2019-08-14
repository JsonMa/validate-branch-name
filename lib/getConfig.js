'use strict';
const cosmiconfig = require('cosmiconfig');
const defaultConfig = require('../config/config.default');

module.exports = {
  getConf(startDir = null, endDir = null, clearCaches = false) {
    const explorer = cosmiconfig('validate-branch-name', {
      endDir,
    });
    const {
      config = {},
    } = explorer.searchSync(startDir) || {};
    if (clearCaches) explorer.clearCaches();

    return Object.assign({}, defaultConfig, config);
  },
};

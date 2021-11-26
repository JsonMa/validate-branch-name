'use strict';

const {
  assert,
} = require('chai');
const {
  getConf,
} = require('../lib/getConfig');
const path = require('path');

describe('config', () => {
  describe('getDefaultConfig', () => {
    it('should returns the default validate-branch-name configs', () => {
      const {
        pattern,
        errorMsg,
      } = require('../config/config.default');
      assert.equal(pattern, '^(master|develop){1}$|^(feature|fix|hotfix|release)\/.+$', 'default pattern error');
      assert.equal(errorMsg, 'Branch name validate failed please rename your current branch', 'default errMsg error');
    });
  });

  describe('getExternalConfig', () => {
    it('shoud get config from .validate-branch-namerc file', () => {
      const {
        pattern,
        errorMsg,
      } = getConf(path.join(__dirname, '/common_config'));
      assert.equal(pattern, 'common pattern', '.*rc common pattern error');
      assert.equal(errorMsg, 'common errorMsg', '.*rc common errorMsg error');
    });

    it('shoud get cjs config from .validate-branch-namerc.cjs file', () => {
      const {
        pattern,
        errorMsg,
      } = getConf(path.join(__dirname, '/cjs_config'));
      assert.equal(pattern, 'cjs pattern', '.*rc cjs pattern error');
      assert.equal(errorMsg, 'cjs errorMsg', '.*rc cjs errorMsg error');
    });

    it('shoud get config from default file', () => {
      const {
        pattern,
        errorMsg,
      } = getConf();
      assert.equal(pattern, '^(master|develop){1}$|^(feature|fix|hotfix|release)\/.+$', 'default pattern error');
      assert.equal(errorMsg, 'Branch name validate failed please rename your current branch', 'default errorMsg error');
    });
  });
});

'use strict';

const { validateBranchName } = require('./lib/validateBranchName');

module.exports = branch => {
  const branchName = branch || require('current-git-branch');
  return validateBranchName(branchName, null, false);
};

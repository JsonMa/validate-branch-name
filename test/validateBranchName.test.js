'use strict';

const {
  assert,
} = require('chai');
const {
  validateBranchName,
} = require('../lib/validateBranchName');

describe('validate-branch-name.js', function() {
  it('validation should be passed', function() {
    let passedCount = 0;
    const branchNames = ['master', 'main', 'develop', 'feature/test/test1', 'fix/test/test1', 'hotfix/test/test1', 'release/test/test1'];
    branchNames.forEach(function(item) {
      const result = validateBranchName(item);
      if (result) passedCount += 1;
    });
    assert.equal(passedCount, branchNames.length, 'validation failed');
  });

  it('validation should be rejected', function() {
    let rejectedCount = 0;
    const branchNames = ['master/', 'master_', 'main/', 'main_', 'develop/', 'develop_', 'feature_', 'feature', 'fix', 'fix_', 'hotfix', 'hotfix_', 'release', 'release_'];
    branchNames.forEach(function(item) {
      const result = validateBranchName(item);
      if (!result) rejectedCount += 1;
    });
    assert.equal(rejectedCount, branchNames.length, 'validation failed');
  });
});

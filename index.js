'use strict';

const branchName = require('current-git-branch');
const {
  getConfig,
} = require('./lib/getConfig');

const {
  pattern,
  errorMsg,
} = getConfig();

// validate whether it is a git repository
if (!branchName()) {
  console.error('\x1b[31m%s\x1b[0m', 'Error: not a git repository\n');
  process.exitCode = 1;
  return;
}

try {
  const validBranchNameRegExp = new RegExp(pkg['validate-branch-name'] && pkg['validate-branch-name'].pattern || pattern, 'g');
  if (validBranchNameRegExp.test(branchName())) {
    process.exitCode = 0;
  } else {
    process.exitCode = 1;
    console.error(
      '\x1b[31m%s\x1b[0m',
      `${errorMsg} \n` +
      `Branch Name: "${branchName()}" \n` +
      `Pattern:"${validBranchNameRegExp.toString()}" \n`
    );
  }
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', error.message + '\n');
  process.exitCode = 1;
}

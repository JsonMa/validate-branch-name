#!/usr/bin/env node

'use strict';

const branchName = require('current-git-branch');
const {
  validateBranchName,
} = require('./lib/validateBranchName');
const currentBranchName = branchName();
const SUCCESS_CODE = 0;
const FAILED_CODE = 1;

// validate whether it is a git repository
if (!currentBranchName) {
  console.error('\x1b[31m%s\x1b[0m', 'Error: not a git repository\n');
  process.exitCode = FAILED_CODE;
  return;
}
try {
  const result = validateBranchName(currentBranchName);
  process.exitCode = result ? SUCCESS_CODE : FAILED_CODE;
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', error.message + '\n');
  process.exitCode = FAILED_CODE;
}

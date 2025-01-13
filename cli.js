#!/usr/bin/env node

'use strict';

const GitInfo = require('git-local-info');
const { Command, Option } = require('commander');
const path = require('path');
const {
  validateBranchName,
} = require('./lib/validateBranchName');
const currentBranchName = new GitInfo().getGitInfo.branch;
const SUCCESS_CODE = 0;
const FAILED_CODE = 1;
const pkgJson = require(path.join(__dirname, './package.json'));
const program = new Command();
program.description('Git branch name validate tool');
program.version(pkgJson.version, '-v, --version', 'validate-branch-name current version');
program.option('-t, --test <branch>', 'test target branch, using current git brach by default');
program.addOption(new Option('-r, --regexp <regexp>', 'choose regular expression to test branch name'));
program.parse(process.argv);

const options = program.opts();
const branch = options.test || currentBranchName;

// validate whether it is a git repository
if (!branch) {
  console.error('\x1b[31m%s\x1b[0m', 'Error: not a git repository\n');
  process.exitCode = FAILED_CODE;
  return;
}
try {
  const result = validateBranchName(branch, options.regexp);
  process.exitCode = result ? SUCCESS_CODE : FAILED_CODE;
} catch (error) {
  console.error('\x1b[31m%s\x1b[0m', error.message + '\n');
  process.exitCode = FAILED_CODE;
}

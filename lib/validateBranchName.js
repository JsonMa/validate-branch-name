'use strict';

const {
  getConf,
} = require('./getConfig');

/**
 * validate branch name
 *
 * @param {String} branchName - branch name
 * @param {String} pattern - pattern
 * @param {Bollean} showLog - whether to show console log
 * @return {Boolean} result
 */
function validateBranchName(branchName, pattern, showLog = true) {
  const {
    pattern: configPattern,
    errorMsg,
  } = getConf();
  const validBranchNameRegExp = new RegExp(pattern || configPattern, 'g');
  const result = validBranchNameRegExp.test(branchName);
  if (showLog) {
    if (!result) {
      console.error(
        '\x1b[31m%s\x1b[0m',
        'Result: "failed" \n' +
        `Error Msg: ${errorMsg} \n` +
        `Branch Name: "${branchName}" \n` +
        `Pattern:"${validBranchNameRegExp.toString()}" \n`
      );
    } else {
      console.info(
        '\x1b[32m%s\x1b[0m',
        'Result: "passed"\n' +
        `Branch Name: "${branchName}" \n` +
        `Pattern:"${validBranchNameRegExp.toString()}" \n`
      );
    }
  }
  return result;
}

module.exports.validateBranchName = validateBranchName;

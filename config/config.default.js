'use strict';

module.exports = {
  pattern: '^(master|main|develop){1}$|^(feature|fix|hotfix|release)\/.+$',
  errorMsg: 'Branch name validate failed please rename your current branch',
};

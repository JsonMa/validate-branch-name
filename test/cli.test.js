'use strict';

const {
  assert,
} = require('chai');
const { execSync } = require('child_process');

describe('cli', () => {
  describe('run validate-branch-name cli', () => {
    it('should return branch passed msg', () => {
      const subprocess = execSync('validate-branch-name -t master');
      assert(subprocess.toString().includes('passed'), 'cli test command error');
    });

    it('shoud pass self define regexp and branch', () => {
      const subprocess = execSync('validate-branch-name -r asdf -t asdf');
      assert(subprocess.toString().includes('passed'), 'cli test command error');
    });
  });
});

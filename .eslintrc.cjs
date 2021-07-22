'use strict';

module.exports = {
  extends: [
    'ash-nazg/sauron-node-overrides'
  ],
  settings: {
    polyfills: [
      'console',
      'Error',
      'Set'
    ]
  },
  overrides: [
    {
      files: 'test/**'
    }
  ],

  // Auto-set dynamically by config but needs to be explicit for Atom
  parserOptions: {
    ecmaVersion: 2021
  },

  rules: {
    // https://github.com/benmosher/eslint-plugin-import/issues/1868
    'import/no-unresolved': 'off'
  }
};

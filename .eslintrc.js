// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "amd": true,
    "jquery": true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "ecmaFeatures": {
      "modules": true
    }
  },
  "globals": {
    "ENV": true,
    "Swiper": false
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'linebreak-style': 0,
    // allow console during development
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    "global-require": 0,
  }
}

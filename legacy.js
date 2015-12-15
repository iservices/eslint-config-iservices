module.exports = {
  'extends': [
    'eslint-config-iservices/rules/best-practices',
    'eslint-config-iservices/rules/errors',
    'eslint-config-iservices/rules/legacy',
    'eslint-config-iservices/rules/node',
    'eslint-config-iservices/rules/strict',
    'eslint-config-iservices/rules/style',
    'eslint-config-iservices/rules/variables'
  ].map(require.resolve),
  'env': {
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },
  'ecmaFeatures': {},
  'globals': {},
  'rules': {}
};
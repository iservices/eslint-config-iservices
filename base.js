module.exports = {
  'extends': [
    'eslint-config-iservices/legacy',
    'eslint-config-iservices/rules/es6',
  ].map(require.resolve),
  'rules': {}
};
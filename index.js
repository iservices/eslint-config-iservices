module.exports = {
  'extends': [
    'eslint-config-iservices/base',
    'eslint-config-iservices/rules/strict'
  ].map(require.resolve),
  rules: {}
};
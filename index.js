module.exports = {
  'extends': [
    'eslint-config-iservices/base',
    'eslint-config-iservices/rules/strict',
    'eslint-config-iservices/rules/babel'
  ].map(require.resolve),
  rules: {}
};
module.exports = {
  'extends': [
    'eslint-config-airbnb',
    'eslint-config-iservices/rules/iservices'
  ].map(require.resolve),
  rules: {}
};
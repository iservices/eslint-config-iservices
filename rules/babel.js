module.exports = {
  'rules': {
    // enforce the spacing around the * in generator functions
    'babel/generator-star-spacing': 0,
    // require a capital letter for constructors
    'babel/new-cap': [2, {'newIsCap': true}],
    // enforce spacing inside array brackets
    'babel/array-bracket-spacing': [2, 'never'],
    // require padding inside curly braces
    'babel/object-curly-spacing': [2, 'always'],
    // require method and property shorthand syntax for object literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/object-shorthand.md
    'babel/object-shorthand': [2, 'always'],
    // require parens in arrow function arguments
    'babel/arrow-parens': 0,
    // guard against awaiting async functions inside of a loop
    "babel/no-await-in-loop": 1,
    // require a particular separator between properties in Flow object types
    "babel/flow-object-type": 1,
    // require or forbid trailing commas for function paramater lists
    "babel/func-params-comma-dangle": [2, "never"]
  }
};
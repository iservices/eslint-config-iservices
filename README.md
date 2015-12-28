# eslint-config-iservices

## Overview

This is a node package that contains eslint rules customized specifically for the iservices team standards.  The structure of the code in this package is copied from the [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) package and modified for iservices use.

## Guide

To install this package run the following command within your project from the console.

```
npm install --save-dev eslint-config-iservices
```

You will also need to install eslint since this is the package used to do the actual linting.  To install eslint run the following command within your project from the console.

```
npm install --save-dev eslint
```

Once you have both packages installed you need to configure eslint to use the rules defined in the eslint-config-iservices package.  To do this you will create an `.eslintrc` file within the root folder of your project.
The content of this file should look as follows.

```
{
  "extends": "iservices",
  "rules": {
  }
}
```

This tells eslint to use the eslint-config-iservices rules.  It also has a rules section that allows you to add custom rules to override the iservices standard rules when needed.
See the [eslint](http://eslint.org/) site for documentation on how to define rules.

Once you have everything setup you can run eslint and it will use the eslint-config-iservices rules as well as any customizations you may have made.  
The following is an example of running eslint from the console against javascript files within a src folder.

```
eslint src/*.js
```

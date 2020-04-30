# @bemoje/is-number

Determine whether a value is a number or not.

#### Version

<span><a href="https://npmjs.org/@bemoje/is-number" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/is-number" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/is-number" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-is-number.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/is-number" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-is-number.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/is-number" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/is-number" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-is-number/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-is-number" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/is-number
npm install --save @bemoje/is-number
npm install --save-dev @bemoje/is-number
```

## Usage

```javascript

import isNumber from '@bemoje/is-number'

isNumber(3)
//=> true

isNumber(Number(3))
//=> true

isNumber(new Number(3))
//=> true

isNumber('3')
//=> false

isNumber(NaN)
//=> false

isNumber(Infinity)
//=> false

isNumber(Number.POSITIVE_INFINITY)
//=> false

isNumber(Number.NEGATIVE_INFINITY)
//=> false

isNumber(Number.NaN)
//=> false

isNumber(Number.EPSILON)
//=> true

isNumber(Number.MAX_SAFE_INTEGER)
//=> true

isNumber(Number.MIN_SAFE_INTEGER)
//=> true

isNumber(Number.MIN_VALUE)
//=> true

isNumber(Number.MAX_VALUE)
//=> true

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [isNumber][1]

    -   [Parameters][2]

## isNumber

Determine whether a value is a number or not.

##### Parameters

-   `value` **any** The value

Returns **[boolean][3]** 

[1]: #isnumber

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
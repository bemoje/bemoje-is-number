import isNumber from '../src/is-number'

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

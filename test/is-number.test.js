import isNumber from '../src/is-number'

describe('isNumber', () => {
	test('works', () => {
		expect(isNumber(3)).toBe(true)
		expect(isNumber(new Number(3))).toBe(true)
		expect(isNumber(Number(3))).toBe(true)
		expect(isNumber(Number.EPSILON)).toBe(true)
		expect(isNumber(Number.MAX_SAFE_INTEGER)).toBe(true)
		expect(isNumber(Number.MIN_SAFE_INTEGER)).toBe(true)
		expect(isNumber(Number.MIN_VALUE)).toBe(true)
		expect(isNumber(Number.MAX_VALUE)).toBe(true)

		expect(isNumber('3')).toBe(false)
		expect(isNumber(NaN)).toBe(false)
		expect(isNumber(Infinity)).toBe(false)
		expect(isNumber(Number.POSITIVE_INFINITY)).toBe(false)
		expect(isNumber(Number.NEGATIVE_INFINITY)).toBe(false)
		expect(isNumber(Number.NaN)).toBe(false)
	})
})

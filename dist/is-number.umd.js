(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['is-number'] = factory());
}(this, (function () { 'use strict';

	/**
	 * Determine whether a value is a number or not.
	 * @param {*} value - The value
	 * @returns {boolean}
	 */
	function isNumber(value) {
		const type = typeof value;

		if (type === 'number') {
			// exclude infinities and NaN
			if (value - value !== 0) {
				return false
			}

			return true
		}

		if (value instanceof Number) {
			return isNumber(Number(value))
		}

		return false
	}

	return isNumber;

})));

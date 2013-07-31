/*global describe */
'use strict';
var assert = require('assert');
var ansi = require('./ansi-styles');

describe('ansiStyles()', function () {
	it('should return ANSI escape codes', function () {
		assert.equal(ansi.green, '\x1b[32m');
		assert.equal(ansi.bgGreen, '\x1b[42m');
	});
});

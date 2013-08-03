/*global describe */
'use strict';
var assert = require('assert');
var ansi = require('./ansi-styles');

// generates the screenshot
console.log(ansi.green[0] + 'Styles:' + ansi.green[1] + '\n');

Object.keys(ansi).forEach(function (el) {
	var style = ansi[el][0];

	if (el === 'reset') {
		style = '';
	}

	if (/^bg[^B]/.test(el)) {
		style = ansi.black[0] + style;
	}

	process.stdout.write(style + el + ansi.reset + ' ');
});

describe('ansiStyles()', function () {
	it('should return ANSI escape codes', function () {
		assert.equal(ansi.green[0], '\x1b[32m');
		assert.equal(ansi.bgGreen[0], '\x1b[42m');
		assert.equal(ansi.green[1], '\x1b[39m');
	});
});

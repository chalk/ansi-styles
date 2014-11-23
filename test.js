'use strict';
var assert = require('assert');
var ansi = require('./');

// generates the screenshot
Object.keys(ansi).forEach(function (el) {
	var style = ansi[el].open;

	if (el === 'reset' || el === 'hidden') {
		return;
	}

	if (/^bg[^B]/.test(el)) {
		style = ansi.black.open + style;
	}

	process.stdout.write(style + el + ansi.reset.open + ansi.reset.close + ' ');
});

describe('ansiStyles()', function () {
	it('should return ANSI escape codes', function () {
		assert.equal(ansi.green.open, '\u001b[32m');
		assert.equal(ansi.bgGreen.open, '\u001b[42m');
		assert.equal(ansi.green.close, '\u001b[39m');
	});
});

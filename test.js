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

it('should return ANSI escape codes', function () {
	assert.equal(ansi.green.open, '\u001b[32m');
	assert.equal(ansi.bgGreen.open, '\u001b[42m');
	assert.equal(ansi.green.close, '\u001b[39m');
	assert.equal(ansi.gray.open, ansi.grey.open);
});

it('should group related codes into categories', function () {
	assert.equal(ansi.colors.magenta, ansi.magenta);
	assert.equal(ansi.bgColors.bgYellow, ansi.bgYellow);
	assert.equal(ansi.modifiers.bold, ansi.bold);
});

it('groups should not be enumerable', function () {
	assert.equal(Object.keys(ansi).indexOf('modifiers'), -1);
});

it('should not pollute other objects', function () {
	var obj1 = require('./');
	var obj2 = require('./');
	obj1.foo = true;
	assert.equal(!!obj2.foo, false);
});

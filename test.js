import test from 'ava';
import ansi from './';

// generates the screenshot
Object.keys(ansi).forEach(x => {
	let style = ansi[x].open;

	if (x === 'reset' || x === 'hidden') {
		return;
	}

	if (/^bg[^B]/.test(x)) {
		style = ansi.black.open + style;
	}

	process.stdout.write(style + x + ansi.reset.open + ansi.reset.close + ' ');
});

test('should return ANSI escape codes', t => {
	t.is(ansi.green.open, '\u001b[32m');
	t.is(ansi.bgGreen.open, '\u001b[42m');
	t.is(ansi.green.close, '\u001b[39m');
	t.is(ansi.gray.open, ansi.grey.open);
	t.end();
});

test('should group related codes into categories', t => {
	t.is(ansi.colors.magenta, ansi.magenta);
	t.is(ansi.bgColors.bgYellow, ansi.bgYellow);
	t.is(ansi.modifiers.bold, ansi.bold);
	t.end();
});

test('groups should not be enumerable', t => {
	t.false(Object.keys(ansi).includes('modifiers'));
	t.end();
});

test('should not pollute other objects', t => {
	const obj1 = require('./');
	const obj2 = require('./');
	obj1.foo = true;
	t.not(obj1.foo, obj2.foo);
	t.end();
});

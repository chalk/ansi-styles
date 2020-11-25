import test from 'ava';
import style from '..';

test('return ANSI escape codes', t => {
	t.is(style.green.open, '\u001B[32m');
	t.is(style.bgGreen.open, '\u001B[42m');
	t.is(style.green.close, '\u001B[39m');
	t.is(style.gray.open, style.grey.open);
});

test('group related codes into categories', t => {
	t.is(style.color.magenta, style.magenta);
	t.is(style.bgColor.bgYellow, style.bgYellow);
	t.is(style.modifier.bold, style.bold);
});

test('groups should not be enumerable', t => {
	t.not(Object.getOwnPropertyDescriptor(style, 'modifier'), undefined);
	t.false(Object.keys(style).includes('modifier'));
});

test('don\'t pollute other objects', t => {
	const obj1 = require('..');
	const obj2 = require('..');

	obj1.foo = true;
	t.not(obj1.foo, obj2.foo);
});

test('support conversion to ansi (256 colors)', t => {
	t.is(style.color.ansi256(style.rgbToAnsi256(255, 255, 255)), '\u001B[38;5;231m');
	t.is(style.color.ansi256(style.hexToAnsi256('#990099')), '\u001B[38;5;127m');
	t.is(style.color.ansi256(style.hexToAnsi256('#FF00FF')), '\u001B[38;5;201m');

	t.is(style.bgColor.ansi256(style.rgbToAnsi256(255, 255, 255)), '\u001B[48;5;231m');
	t.is(style.bgColor.ansi256(style.hexToAnsi256('#990099')), '\u001B[48;5;127m');
	t.is(style.bgColor.ansi256(style.hexToAnsi256('#FF00FF')), '\u001B[48;5;201m');
});

test('support conversion to ansi (16 million colors)', t => {
	t.is(style.color.ansi16m(255, 255, 255), '\u001B[38;2;255;255;255m');
	t.is(style.color.ansi16m(...style.hexToRgb('#990099')), '\u001B[38;2;153;0;153m');
	t.is(style.color.ansi16m(...style.hexToRgb('#FF00FF')), '\u001B[38;2;255;0;255m');

	t.is(style.bgColor.ansi16m(255, 255, 255), '\u001B[48;2;255;255;255m');
	t.is(style.bgColor.ansi16m(...style.hexToRgb('#990099')), '\u001B[48;2;153;0;153m');
	t.is(style.bgColor.ansi16m(...style.hexToRgb('#FF00FF')), '\u001B[48;2;255;0;255m');
});

test('16/256/16m color close escapes', t => {
	t.is(style.color.close, '\u001B[39m');
	t.is(style.bgColor.close, '\u001B[49m');
});

test('export raw ANSI escape codes', t => {
	t.is(style.codes.get(0), 0);
	t.is(style.codes.get(1), 22);
	t.is(style.codes.get(91), 39);
	t.is(style.codes.get(40), 49);
	t.is(style.codes.get(100), 49);
});

test('rgb -> truecolor is stubbed', t => {
	t.is(style.color.ansi16m(123, 45, 67), '\u001B[38;2;123;45;67m');
});

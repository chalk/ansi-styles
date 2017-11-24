import test from 'ava';

// Spoof supports color
require('./_supports-color')(__dirname);

const style = require('..');

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
	t.true(Object.getOwnPropertyDescriptor(style, 'modifier') !== undefined);
	t.true(Object.keys(style).indexOf('modifier') === -1);
});

test('don\'t pollute other objects', t => {
	const obj1 = require('..');
	const obj2 = require('..');

	obj1.foo = true;
	t.not(obj1.foo, obj2.foo);
});

test('all color types are always available', t => {
	const ansi = style.color.ansi;
	const ansi256 = style.color.ansi256;
	const ansi16m = style.color.ansi16m;

	t.true(ansi && ansi.ansi && ansi.ansi256 && ansi.ansi16m);
	t.true(ansi256 && ansi256.ansi && ansi256.ansi256 && ansi256.ansi16m);
	t.true(ansi16m && ansi16m.ansi && ansi16m.ansi256 && ansi16m.ansi16m);
});

test('support conversion to ansi (16 colors)', t => {
	t.is(style.color.ansi.rgb(255, 255, 255), '\u001B[97m');
	t.is(style.color.ansi.hsl(140, 100, 50), '\u001B[92m');
	t.is(style.color.ansi.hex('#990099'), '\u001B[35m');
	t.is(style.color.ansi.hex('#FF00FF'), '\u001B[95m');

	t.is(style.bgColor.ansi.rgb(255, 255, 255), '\u001B[107m');
	t.is(style.bgColor.ansi.hsl(140, 100, 50), '\u001B[102m');
	t.is(style.bgColor.ansi.hex('#990099'), '\u001B[45m');
	t.is(style.bgColor.ansi.hex('#FF00FF'), '\u001B[105m');
});

test('support conversion to ansi (256 colors)', t => {
	t.is(style.color.ansi256.rgb(255, 255, 255), '\u001B[38;5;231m');
	t.is(style.color.ansi256.hsl(140, 100, 50), '\u001B[38;5;48m');
	t.is(style.color.ansi256.hex('#990099'), '\u001B[38;5;127m');
	t.is(style.color.ansi256.hex('#FF00FF'), '\u001B[38;5;201m');

	t.is(style.bgColor.ansi256.rgb(255, 255, 255), '\u001B[48;5;231m');
	t.is(style.bgColor.ansi256.hsl(140, 100, 50), '\u001B[48;5;48m');
	t.is(style.bgColor.ansi256.hex('#990099'), '\u001B[48;5;127m');
	t.is(style.bgColor.ansi256.hex('#FF00FF'), '\u001B[48;5;201m');
});

test('support conversion to ansi (16 million colors)', t => {
	t.is(style.color.ansi16m.rgb(255, 255, 255), '\u001B[38;2;255;255;255m');
	t.is(style.color.ansi16m.hsl(140, 100, 50), '\u001B[38;2;0;255;85m');
	t.is(style.color.ansi16m.hex('#990099'), '\u001B[38;2;153;0;153m');
	t.is(style.color.ansi16m.hex('#FF00FF'), '\u001B[38;2;255;0;255m');

	t.is(style.bgColor.ansi16m.rgb(255, 255, 255), '\u001B[48;2;255;255;255m');
	t.is(style.bgColor.ansi16m.hsl(140, 100, 50), '\u001B[48;2;0;255;85m');
	t.is(style.bgColor.ansi16m.hex('#990099'), '\u001B[48;2;153;0;153m');
	t.is(style.bgColor.ansi16m.hex('#FF00FF'), '\u001B[48;2;255;0;255m');
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

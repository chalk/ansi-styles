import test from 'ava';
import style from './';

function generateScreenshot() {
	const lineLength = process.env.COLUMNS;
	var current = 0;
	for (const [key, val] of Object.entries(style)) {
		let code = val.open;

		if (key === 'reset' || key === 'hidden') {
			continue;
		}

		if (contrast(code)) {
			code = style.black.open + code;
		}

		const entry = `${code}${key}${style.reset.close} `;
		current += entry.length;
		if (current > lineLength) {
			process.stdout.write('\n');
			current = entry.length;
		}
		process.stdout.write(entry);
	}
}

function contrast(code) {
	const [junk1, junk2, r, g, b] = code.split(';'); // eslint-disable-line no-unused-vars
	return Math.round(((parseInt(r, 10) * 299) + (parseInt(g, 10) * 587) + (parseInt(b, 10) * 114)) / 1000) > 125;
}

generateScreenshot();

test('return Full color escape codes', t => {
	t.is(style.green.open, '\u001b[38;2;28;172;120m');
	t.is(style.bgGreen.open, '\u001b[48;2;28;172;120m');
	t.is(style.green.close, '\u001b[0m');
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
	const obj1 = require('./');
	const obj2 = require('./');

	obj1.foo = true;
	t.not(obj1.foo, obj2.foo);
});

test('support conversion to ansi (16 colors)', t => {
	t.is(style.color.ansi.rgb(255, 255, 255), '\u001b[97m');
	t.is(style.color.ansi.hsl(140, 100, 50), '\u001b[92m');
	t.is(style.color.ansi.hex('#990099'), '\u001b[35m');
	t.is(style.color.ansi.hex('#FF00FF'), '\u001b[95m');

	t.is(style.bgColor.ansi.rgb(255, 255, 255), '\u001b[107m');
	t.is(style.bgColor.ansi.hsl(140, 100, 50), '\u001b[102m');
	t.is(style.bgColor.ansi.hex('#990099'), '\u001b[45m');
	t.is(style.bgColor.ansi.hex('#FF00FF'), '\u001b[105m');
});

test('support conversion to ansi (256 colors)', t => {
	t.is(style.color.ansi256.rgb(255, 255, 255), '\u001b[38;5;231m');
	t.is(style.color.ansi256.hsl(140, 100, 50), '\u001b[38;5;48m');
	t.is(style.color.ansi256.hex('#990099'), '\u001b[38;5;127m');
	t.is(style.color.ansi256.hex('#FF00FF'), '\u001b[38;5;201m');

	t.is(style.bgColor.ansi256.rgb(255, 255, 255), '\u001b[48;5;231m');
	t.is(style.bgColor.ansi256.hsl(140, 100, 50), '\u001b[48;5;48m');
	t.is(style.bgColor.ansi256.hex('#990099'), '\u001b[48;5;127m');
	t.is(style.bgColor.ansi256.hex('#FF00FF'), '\u001b[48;5;201m');
});

test('support conversion to ansi (16 million colors)', t => {
	t.is(style.color.ansi16m.rgb(255, 255, 255), '\u001b[38;2;255;255;255m');
	t.is(style.color.ansi16m.hsl(140, 100, 50), '\u001b[38;2;0;255;85m');
	t.is(style.color.ansi16m.hex('#990099'), '\u001b[38;2;153;0;153m');
	t.is(style.color.ansi16m.hex('#FF00FF'), '\u001b[38;2;255;0;255m');

	t.is(style.bgColor.ansi16m.rgb(255, 255, 255), '\u001b[48;2;255;255;255m');
	t.is(style.bgColor.ansi16m.hsl(140, 100, 50), '\u001b[48;2;0;255;85m');
	t.is(style.bgColor.ansi16m.hex('#990099'), '\u001b[48;2;153;0;153m');
	t.is(style.bgColor.ansi16m.hex('#FF00FF'), '\u001b[48;2;255;0;255m');
});

test('16/256/16m color close escapes', t => {
	t.is(style.color.close, '\u001b[39m');
	t.is(style.bgColor.close, '\u001b[49m');
});

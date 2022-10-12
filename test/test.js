import test from 'ava';
import ansiStyles, {modifierNames, foregroundColorNames, backgroundColorNames, colorNames} from '../index.js';

test('return ANSI escape codes', t => {
	t.is(ansiStyles.green.open, '\u001B[32m');
	t.is(ansiStyles.bgGreen.open, '\u001B[42m');
	t.is(ansiStyles.green.close, '\u001B[39m');
	t.is(ansiStyles.gray.open, ansiStyles.grey.open);
});

test('group related codes into categories', t => {
	t.is(ansiStyles.color.magenta, ansiStyles.magenta);
	t.is(ansiStyles.bgColor.bgYellow, ansiStyles.bgYellow);
	t.is(ansiStyles.modifier.bold, ansiStyles.bold);
});

test('groups should not be enumerable', t => {
	t.not(Object.getOwnPropertyDescriptor(ansiStyles, 'modifier'), undefined);
	t.false(Object.keys(ansiStyles).includes('modifier'));
});

test('support conversion to ansi (16 colors)', t => {
	t.is(ansiStyles.color.ansi(ansiStyles.rgbToAnsi(255, 255, 255)), '\u001B[97m');
	t.is(ansiStyles.color.ansi(ansiStyles.hexToAnsi('#990099')), '\u001B[35m');
	t.is(ansiStyles.color.ansi(ansiStyles.hexToAnsi('#FF00FF')), '\u001B[95m');

	t.is(ansiStyles.bgColor.ansi(ansiStyles.rgbToAnsi(255, 255, 255)), '\u001B[107m');
	t.is(ansiStyles.bgColor.ansi(ansiStyles.hexToAnsi('#990099')), '\u001B[45m');
	t.is(ansiStyles.bgColor.ansi(ansiStyles.hexToAnsi('#FF00FF')), '\u001B[105m');
});

test('support conversion to ansi (256 colors)', t => {
	t.is(ansiStyles.color.ansi256(ansiStyles.rgbToAnsi256(255, 255, 255)), '\u001B[38;5;231m');
	t.is(ansiStyles.color.ansi256(ansiStyles.hexToAnsi256('#990099')), '\u001B[38;5;127m');
	t.is(ansiStyles.color.ansi256(ansiStyles.hexToAnsi256('#FF00FF')), '\u001B[38;5;201m');

	t.is(ansiStyles.bgColor.ansi256(ansiStyles.rgbToAnsi256(255, 255, 255)), '\u001B[48;5;231m');
	t.is(ansiStyles.bgColor.ansi256(ansiStyles.hexToAnsi256('#990099')), '\u001B[48;5;127m');
	t.is(ansiStyles.bgColor.ansi256(ansiStyles.hexToAnsi256('#FF00FF')), '\u001B[48;5;201m');
});

test('support conversion to ansi (16 million colors)', t => {
	t.is(ansiStyles.color.ansi16m(255, 255, 255), '\u001B[38;2;255;255;255m');
	t.is(ansiStyles.color.ansi16m(...ansiStyles.hexToRgb('#990099')), '\u001B[38;2;153;0;153m');
	t.is(ansiStyles.color.ansi16m(...ansiStyles.hexToRgb('#FF00FF')), '\u001B[38;2;255;0;255m');

	t.is(ansiStyles.bgColor.ansi16m(255, 255, 255), '\u001B[48;2;255;255;255m');
	t.is(ansiStyles.bgColor.ansi16m(...ansiStyles.hexToRgb('#990099')), '\u001B[48;2;153;0;153m');
	t.is(ansiStyles.bgColor.ansi16m(...ansiStyles.hexToRgb('#FF00FF')), '\u001B[48;2;255;0;255m');
});

test('16/256/16m color close escapes', t => {
	t.is(ansiStyles.color.close, '\u001B[39m');
	t.is(ansiStyles.bgColor.close, '\u001B[49m');
});

test('export raw ANSI escape codes', t => {
	t.is(ansiStyles.codes.get(0), 0);
	t.is(ansiStyles.codes.get(1), 22);
	t.is(ansiStyles.codes.get(91), 39);
	t.is(ansiStyles.codes.get(40), 49);
	t.is(ansiStyles.codes.get(100), 49);
});

test('rgb → truecolor is stubbed', t => {
	t.is(ansiStyles.color.ansi16m(123, 45, 67), '\u001B[38;2;123;45;67m');
});

test('non-styles should not be exported', t => {
	const isNonStyle = name => name === 'close' || name.startsWith('ansi');
	t.false(modifierNames.some(name => isNonStyle(name)));
	t.false(foregroundColorNames.some(name => isNonStyle(name)));
	t.false(backgroundColorNames.some(name => isNonStyle(name)));
	t.true(backgroundColorNames.every(name => name.startsWith('bg')));
	t.false(colorNames.some(name => isNonStyle(name)));
});

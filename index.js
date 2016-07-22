'use strict';
var join = require('path').join;
var colorConvert = require('color-convert');
var colorCodes = require(join(__dirname, '/styles/crayon.json'));

function wrapAnsi16(fn, offset) {
	return function () {
		var code = fn.apply(colorConvert, arguments);
		return '\u001b[' + (code + offset) + 'm';
	};
}

function wrapAnsi256(fn, offset) {
	return function () {
		var code = fn.apply(colorConvert, arguments);
		return '\u001b[' + (38 + offset) + ';5;' + code + 'm';
	};
}

function wrapAnsi16m(fn, offset) {
	return function () {
		var rgb = fn.apply(colorConvert, arguments);
		return '\u001b[' + (38 + offset) + ';2;' +
			rgb[0] + ';' + rgb[1] + ';' + rgb[2] + 'm';
	};
}

function assembleStyles() {
	var styles = Object.assign({
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		}}, colorCodes);

	// fix humans
	styles.color.grey = styles.color.gray;

	Object.keys(styles).forEach(function (groupName) {
		var group = styles[groupName];

		Object.keys(group).forEach(function (styleName) {
			var style = group[styleName];

			styles[styleName] = group[styleName] = {
				open: '\u001b[' + style[0] + 'm',
				close: '\u001b[' + style[1] + 'm'
			};
		});

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	});

	function rgb2rgb(r, g, b) {
		return [r, g, b];
	}

	styles.color.close = '\u001b[39m';
	styles.bgColor.close = '\u001b[49m';

	styles.color.ansi = {};
	styles.color.ansi256 = {};
	styles.color.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 0)
	};

	styles.bgColor.ansi = {};
	styles.bgColor.ansi256 = {};
	styles.bgColor.ansi16m = {
		rgb: wrapAnsi16m(rgb2rgb, 10)
	};

	for (var key in colorConvert) {
		if (!{}.hasOwnProperty.call(colorConvert, key) || typeof colorConvert[key] !== 'object') {
			continue;
		}

		var suite = colorConvert[key];

		if ('ansi16' in suite) {
			styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
			styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
		}

		if ('ansi256' in suite) {
			styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
			styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
		}

		if ('rgb' in suite) {
			styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
			styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
		}
	}
	return styles;
}

Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});

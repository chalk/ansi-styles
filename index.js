'use strict';
var styles = module.exports;

var codes = {
	reset: [0, 0],

	modifiers: {
		bold: [1, 22], // 21 isn't widely supported and 22 does the same thing
		dim: [2, 22],
		italic: [3, 23],
		underline: [4, 24],
		inverse: [7, 27],
		hidden: [8, 28],
		strikethrough: [9, 29]
	},

	colors: {
		black: [30, 39],
		red: [31, 39],
		green: [32, 39],
		yellow: [33, 39],
		blue: [34, 39],
		magenta: [35, 39],
		cyan: [36, 39],
		white: [37, 39],
		gray: [90, 39]
	},

	bgColors: {
		bgBlack: [40, 49],
		bgRed: [41, 49],
		bgGreen: [42, 49],
		bgYellow: [43, 49],
		bgBlue: [44, 49],
		bgMagenta: [45, 49],
		bgCyan: [46, 49],
		bgWhite: [47, 49]
	}
};

var makeStyle = function (code) {
	return {
		open: '\u001b[' + code[0] + 'm',
		close: '\u001b[' + code[1] + 'm'
	};
};

Object.keys(codes).forEach(function (key) {
	var val = codes[key];
	if (typeof val == 'object') {
		var group = styles[key] = {};
		Object.keys(val).forEach(function (key) {
			styles[key] = group[key] = makeStyle(val[key]);
		});
	}
	else {
		styles[key] = makeStyle(val);
	}
});

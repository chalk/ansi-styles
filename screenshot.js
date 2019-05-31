'use strict';
const style = require('.');

const width = 55;
let lineLength = 0;

for (const [key, value] of Object.entries(style)) {
	let code = value.open;
	let projectedLength = lineLength + key.length + 1;

	if (key === 'reset' || key === 'hidden' || key === 'grey' || key.includes('Bright')) {
		continue;
	}

	if (/^bg[^B]/.test(key)) {
		code = style.black.open + code;
	}

	if (width < projectedLength) {
		process.stdout.write('\n');
		lineLength = 0;
		projectedLength = key.length + 1;
	}

	process.stdout.write(code + key + style.reset.close + ' ');
	lineLength = projectedLength;
}

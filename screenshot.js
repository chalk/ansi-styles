import ansiStyles from './index.js';

const width = 55;
let lineLength = 0;

for (const [key, value] of Object.entries(ansiStyles)) {
	let code = value.open;
	let projectedLength = lineLength + key.length + 1;

	if (key === 'reset' || key === 'hidden' || key === 'grey' || key.includes('Bright')) {
		continue;
	}

	if (/^bg[^B]/.test(key)) {
		code = ansiStyles.black.open + code;
	}

	if (width < projectedLength) {
		process.stdout.write('\n');
		lineLength = 0;
		projectedLength = key.length + 1;
	}

	process.stdout.write(code + key + ansiStyles.reset.close + ' ');
	lineLength = projectedLength;
}

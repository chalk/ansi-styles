import {expectType, expectError} from 'tsd';
import * as cssColors from 'color-name';
import {KEYWORD} from 'color-convert/conversions';
import colorConvert = require('color-convert');
import ansiStyles = require('.');

declare function keyof<T>(type: T): keyof T;
declare function params<T extends (...args: any) => unknown>(type: T): Parameters<T>

type CSS_COLOR_NAMES = keyof typeof cssColors;
let CSS_COLOR_NAMES!: CSS_COLOR_NAMES;
let KEYWORD!: KEYWORD;

expectType<KEYWORD>(CSS_COLOR_NAMES);
expectType<CSS_COLOR_NAMES>(KEYWORD);

expectType<ReadonlyMap<number, number>>(ansiStyles.codes);

expectType<[CSS_COLOR_NAMES]>(params(ansiStyles.color.ansi.keyword));
expectType<[CSS_COLOR_NAMES]>(params(ansiStyles.color.ansi256.keyword));
expectType<[CSS_COLOR_NAMES]>(params(ansiStyles.color.ansi16m.keyword));
expectType<[CSS_COLOR_NAMES]>(params(ansiStyles.bgColor.ansi.keyword));
expectType<[CSS_COLOR_NAMES]>(params(ansiStyles.bgColor.ansi256.keyword));
expectType<[CSS_COLOR_NAMES]>(params(ansiStyles.bgColor.ansi16m.keyword));

// - Static colors -
// -- Namespaced --
// --- Foreground color ---
expectType<ansiStyles.CSPair>(ansiStyles.color.black);
expectType<ansiStyles.CSPair>(ansiStyles.color.red);
expectType<ansiStyles.CSPair>(ansiStyles.color.green);
expectType<ansiStyles.CSPair>(ansiStyles.color.yellow);
expectType<ansiStyles.CSPair>(ansiStyles.color.blue);
expectType<ansiStyles.CSPair>(ansiStyles.color.cyan);
expectType<ansiStyles.CSPair>(ansiStyles.color.magenta);
expectType<ansiStyles.CSPair>(ansiStyles.color.white);

expectType<ansiStyles.CSPair>(ansiStyles.color.gray);
expectType<ansiStyles.CSPair>(ansiStyles.color.grey);

expectType<ansiStyles.CSPair>(ansiStyles.color.blackBright);
expectType<ansiStyles.CSPair>(ansiStyles.color.redBright);
expectType<ansiStyles.CSPair>(ansiStyles.color.greenBright);
expectType<ansiStyles.CSPair>(ansiStyles.color.yellowBright);
expectType<ansiStyles.CSPair>(ansiStyles.color.blueBright);
expectType<ansiStyles.CSPair>(ansiStyles.color.cyanBright);
expectType<ansiStyles.CSPair>(ansiStyles.color.magentaBright);
expectType<ansiStyles.CSPair>(ansiStyles.color.whiteBright);

expectType<string>(ansiStyles.color.close);

// --- Background color ---
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgBlack);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgRed);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgGreen);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgYellow);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgBlue);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgCyan);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgMagenta);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgWhite);

expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgGray);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgGrey);

expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgBlackBright);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgRedBright);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgGreenBright);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgYellowBright);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgBlueBright);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgCyanBright);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgMagentaBright);
expectType<ansiStyles.CSPair>(ansiStyles.bgColor.bgWhiteBright);

expectType<string>(ansiStyles.bgColor.close);

// --- Modifiers ---
expectType<ansiStyles.CSPair>(ansiStyles.modifier.bold);
expectType<ansiStyles.CSPair>(ansiStyles.modifier.dim);
expectType<ansiStyles.CSPair>(ansiStyles.modifier.hidden);
expectType<ansiStyles.CSPair>(ansiStyles.modifier.inverse);
expectType<ansiStyles.CSPair>(ansiStyles.modifier.italic);
expectType<ansiStyles.CSPair>(ansiStyles.modifier.reset);
expectType<ansiStyles.CSPair>(ansiStyles.modifier.strikethrough);
expectType<ansiStyles.CSPair>(ansiStyles.modifier.underline);

// -- Top level --
// --- Foreground color ---
expectType<ansiStyles.CSPair>(ansiStyles.black);
expectType<ansiStyles.CSPair>(ansiStyles.red);
expectType<ansiStyles.CSPair>(ansiStyles.green);
expectType<ansiStyles.CSPair>(ansiStyles.yellow);
expectType<ansiStyles.CSPair>(ansiStyles.blue);
expectType<ansiStyles.CSPair>(ansiStyles.cyan);
expectType<ansiStyles.CSPair>(ansiStyles.magenta);
expectType<ansiStyles.CSPair>(ansiStyles.white);

expectType<ansiStyles.CSPair>(ansiStyles.gray);
expectType<ansiStyles.CSPair>(ansiStyles.grey);

expectType<ansiStyles.CSPair>(ansiStyles.blackBright);
expectType<ansiStyles.CSPair>(ansiStyles.redBright);
expectType<ansiStyles.CSPair>(ansiStyles.greenBright);
expectType<ansiStyles.CSPair>(ansiStyles.yellowBright);
expectType<ansiStyles.CSPair>(ansiStyles.blueBright);
expectType<ansiStyles.CSPair>(ansiStyles.cyanBright);
expectType<ansiStyles.CSPair>(ansiStyles.magentaBright);
expectType<ansiStyles.CSPair>(ansiStyles.whiteBright);

// --- Background color ---
expectType<ansiStyles.CSPair>(ansiStyles.bgBlack);
expectType<ansiStyles.CSPair>(ansiStyles.bgRed);
expectType<ansiStyles.CSPair>(ansiStyles.bgGreen);
expectType<ansiStyles.CSPair>(ansiStyles.bgYellow);
expectType<ansiStyles.CSPair>(ansiStyles.bgBlue);
expectType<ansiStyles.CSPair>(ansiStyles.bgCyan);
expectType<ansiStyles.CSPair>(ansiStyles.bgMagenta);
expectType<ansiStyles.CSPair>(ansiStyles.bgWhite);

expectType<ansiStyles.CSPair>(ansiStyles.bgGray);
expectType<ansiStyles.CSPair>(ansiStyles.bgGrey);

expectType<ansiStyles.CSPair>(ansiStyles.bgBlackBright);
expectType<ansiStyles.CSPair>(ansiStyles.bgRedBright);
expectType<ansiStyles.CSPair>(ansiStyles.bgGreenBright);
expectType<ansiStyles.CSPair>(ansiStyles.bgYellowBright);
expectType<ansiStyles.CSPair>(ansiStyles.bgBlueBright);
expectType<ansiStyles.CSPair>(ansiStyles.bgCyanBright);
expectType<ansiStyles.CSPair>(ansiStyles.bgMagentaBright);
expectType<ansiStyles.CSPair>(ansiStyles.bgWhiteBright);

// --- Modifiers ---
expectType<ansiStyles.CSPair>(ansiStyles.bold);
expectType<ansiStyles.CSPair>(ansiStyles.dim);
expectType<ansiStyles.CSPair>(ansiStyles.hidden);
expectType<ansiStyles.CSPair>(ansiStyles.inverse);
expectType<ansiStyles.CSPair>(ansiStyles.italic);
expectType<ansiStyles.CSPair>(ansiStyles.reset);
expectType<ansiStyles.CSPair>(ansiStyles.strikethrough);
expectType<ansiStyles.CSPair>(ansiStyles.underline);

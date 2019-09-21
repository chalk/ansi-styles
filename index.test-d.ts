import {expectType, expectError} from 'tsd';
import colorConvert = require('color-convert');
import ansiStyles = require('.');

declare function keyof<T>(type: T): keyof T;

type ExpectedColorSpaces = Exclude<keyof typeof colorConvert, 'ansi16'> | 'ansi';
let expectedColors!: ExpectedColorSpaces;

expectType<ReadonlyMap<number, number>>(ansiStyles.codes);

// - ColorConvert -
// -- Foreground color --
expectType<ExpectedColorSpaces>(keyof(ansiStyles.color.ansi));
expectType<ExpectedColorSpaces>(keyof(ansiStyles.color.ansi256));
expectType<ExpectedColorSpaces>(keyof(ansiStyles.color.ansi16m));

expectType<keyof typeof ansiStyles.color.ansi>(expectedColors);
expectType<keyof typeof ansiStyles.color.ansi256>(expectedColors);
expectType<keyof typeof ansiStyles.color.ansi16m>(expectedColors);

// -- Background color --
expectType<ExpectedColorSpaces>(keyof(ansiStyles.bgColor.ansi));
expectType<ExpectedColorSpaces>(keyof(ansiStyles.bgColor.ansi256));
expectType<ExpectedColorSpaces>(keyof(ansiStyles.bgColor.ansi16m));

expectType<keyof typeof ansiStyles.bgColor.ansi>(expectedColors);
expectType<keyof typeof ansiStyles.bgColor.ansi256>(expectedColors);
expectType<keyof typeof ansiStyles.bgColor.ansi16m>(expectedColors);

// - Static colors -
// -- Namespaced --
// --- Foreground color ---
expectType<ansiStyles.CSIPair>(ansiStyles.color.black);
expectType<ansiStyles.CSIPair>(ansiStyles.color.red);
expectType<ansiStyles.CSIPair>(ansiStyles.color.green);
expectType<ansiStyles.CSIPair>(ansiStyles.color.yellow);
expectType<ansiStyles.CSIPair>(ansiStyles.color.blue);
expectType<ansiStyles.CSIPair>(ansiStyles.color.cyan);
expectType<ansiStyles.CSIPair>(ansiStyles.color.magenta);
expectType<ansiStyles.CSIPair>(ansiStyles.color.white);

expectType<ansiStyles.CSIPair>(ansiStyles.color.gray);
expectType<ansiStyles.CSIPair>(ansiStyles.color.grey);

expectType<ansiStyles.CSIPair>(ansiStyles.color.blackBright);
expectType<ansiStyles.CSIPair>(ansiStyles.color.redBright);
expectType<ansiStyles.CSIPair>(ansiStyles.color.greenBright);
expectType<ansiStyles.CSIPair>(ansiStyles.color.yellowBright);
expectType<ansiStyles.CSIPair>(ansiStyles.color.blueBright);
expectType<ansiStyles.CSIPair>(ansiStyles.color.cyanBright);
expectType<ansiStyles.CSIPair>(ansiStyles.color.magentaBright);
expectType<ansiStyles.CSIPair>(ansiStyles.color.whiteBright);

expectType<'\x1B[39m'>(ansiStyles.color.close);

// --- Background color ---
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgBlack);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgRed);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgGreen);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgYellow);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgBlue);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgCyan);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgMagenta);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgWhite);

expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgGray);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgGrey);

expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgBlackBright);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgRedBright);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgGreenBright);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgYellowBright);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgBlueBright);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgCyanBright);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgMagentaBright);
expectType<ansiStyles.CSIPair>(ansiStyles.bgColor.bgWhiteBright);

expectType<'\x1B[49m'>(ansiStyles.bgColor.close);

// --- Modifiers ---
expectType<ansiStyles.CSIPair>(ansiStyles.modifier.bold);
expectType<ansiStyles.CSIPair>(ansiStyles.modifier.dim);
expectType<ansiStyles.CSIPair>(ansiStyles.modifier.hidden);
expectType<ansiStyles.CSIPair>(ansiStyles.modifier.inverse);
expectType<ansiStyles.CSIPair>(ansiStyles.modifier.italic);
expectType<ansiStyles.CSIPair>(ansiStyles.modifier.reset);
expectType<ansiStyles.CSIPair>(ansiStyles.modifier.strikethrough);
expectType<ansiStyles.CSIPair>(ansiStyles.modifier.underline);

// -- Top level --
// --- Foreground color ---
expectType<ansiStyles.CSIPair>(ansiStyles.black);
expectType<ansiStyles.CSIPair>(ansiStyles.red);
expectType<ansiStyles.CSIPair>(ansiStyles.green);
expectType<ansiStyles.CSIPair>(ansiStyles.yellow);
expectType<ansiStyles.CSIPair>(ansiStyles.blue);
expectType<ansiStyles.CSIPair>(ansiStyles.cyan);
expectType<ansiStyles.CSIPair>(ansiStyles.magenta);
expectType<ansiStyles.CSIPair>(ansiStyles.white);

expectType<ansiStyles.CSIPair>(ansiStyles.gray);
expectType<ansiStyles.CSIPair>(ansiStyles.grey);

expectType<ansiStyles.CSIPair>(ansiStyles.blackBright);
expectType<ansiStyles.CSIPair>(ansiStyles.redBright);
expectType<ansiStyles.CSIPair>(ansiStyles.greenBright);
expectType<ansiStyles.CSIPair>(ansiStyles.yellowBright);
expectType<ansiStyles.CSIPair>(ansiStyles.blueBright);
expectType<ansiStyles.CSIPair>(ansiStyles.cyanBright);
expectType<ansiStyles.CSIPair>(ansiStyles.magentaBright);
expectType<ansiStyles.CSIPair>(ansiStyles.whiteBright);

// --- Background color ---
expectType<ansiStyles.CSIPair>(ansiStyles.bgBlack);
expectType<ansiStyles.CSIPair>(ansiStyles.bgRed);
expectType<ansiStyles.CSIPair>(ansiStyles.bgGreen);
expectType<ansiStyles.CSIPair>(ansiStyles.bgYellow);
expectType<ansiStyles.CSIPair>(ansiStyles.bgBlue);
expectType<ansiStyles.CSIPair>(ansiStyles.bgCyan);
expectType<ansiStyles.CSIPair>(ansiStyles.bgMagenta);
expectType<ansiStyles.CSIPair>(ansiStyles.bgWhite);

expectType<ansiStyles.CSIPair>(ansiStyles.bgGray);
expectType<ansiStyles.CSIPair>(ansiStyles.bgGrey);

expectType<ansiStyles.CSIPair>(ansiStyles.bgBlackBright);
expectType<ansiStyles.CSIPair>(ansiStyles.bgRedBright);
expectType<ansiStyles.CSIPair>(ansiStyles.bgGreenBright);
expectType<ansiStyles.CSIPair>(ansiStyles.bgYellowBright);
expectType<ansiStyles.CSIPair>(ansiStyles.bgBlueBright);
expectType<ansiStyles.CSIPair>(ansiStyles.bgCyanBright);
expectType<ansiStyles.CSIPair>(ansiStyles.bgMagentaBright);
expectType<ansiStyles.CSIPair>(ansiStyles.bgWhiteBright);

// --- Modifiers ---
expectType<ansiStyles.CSIPair>(ansiStyles.bold);
expectType<ansiStyles.CSIPair>(ansiStyles.dim);
expectType<ansiStyles.CSIPair>(ansiStyles.hidden);
expectType<ansiStyles.CSIPair>(ansiStyles.inverse);
expectType<ansiStyles.CSIPair>(ansiStyles.italic);
expectType<ansiStyles.CSIPair>(ansiStyles.reset);
expectType<ansiStyles.CSIPair>(ansiStyles.strikethrough);
expectType<ansiStyles.CSIPair>(ansiStyles.underline);

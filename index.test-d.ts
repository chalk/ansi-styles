import {expectAssignable, expectError, expectType} from 'tsd';
import ansiStyles, {CSPair, ModifierName, ForegroundColorName, BackgroundColorName, ColorName} from './index.js';

expectType<ReadonlyMap<number, number>>(ansiStyles.codes);

// - Static colors -
// -- Namespaced --
// --- Foreground color ---
expectType<CSPair>(ansiStyles.color.black);
expectType<CSPair>(ansiStyles.color.red);
expectType<CSPair>(ansiStyles.color.green);
expectType<CSPair>(ansiStyles.color.yellow);
expectType<CSPair>(ansiStyles.color.blue);
expectType<CSPair>(ansiStyles.color.cyan);
expectType<CSPair>(ansiStyles.color.magenta);
expectType<CSPair>(ansiStyles.color.white);

expectType<CSPair>(ansiStyles.color.gray);
expectType<CSPair>(ansiStyles.color.grey);

expectType<CSPair>(ansiStyles.color.blackBright);
expectType<CSPair>(ansiStyles.color.redBright);
expectType<CSPair>(ansiStyles.color.greenBright);
expectType<CSPair>(ansiStyles.color.yellowBright);
expectType<CSPair>(ansiStyles.color.blueBright);
expectType<CSPair>(ansiStyles.color.cyanBright);
expectType<CSPair>(ansiStyles.color.magentaBright);
expectType<CSPair>(ansiStyles.color.whiteBright);

expectType<string>(ansiStyles.color.close);

// --- Background color ---
expectType<CSPair>(ansiStyles.bgColor.bgBlack);
expectType<CSPair>(ansiStyles.bgColor.bgRed);
expectType<CSPair>(ansiStyles.bgColor.bgGreen);
expectType<CSPair>(ansiStyles.bgColor.bgYellow);
expectType<CSPair>(ansiStyles.bgColor.bgBlue);
expectType<CSPair>(ansiStyles.bgColor.bgCyan);
expectType<CSPair>(ansiStyles.bgColor.bgMagenta);
expectType<CSPair>(ansiStyles.bgColor.bgWhite);

expectType<CSPair>(ansiStyles.bgColor.bgGray);
expectType<CSPair>(ansiStyles.bgColor.bgGrey);

expectType<CSPair>(ansiStyles.bgColor.bgBlackBright);
expectType<CSPair>(ansiStyles.bgColor.bgRedBright);
expectType<CSPair>(ansiStyles.bgColor.bgGreenBright);
expectType<CSPair>(ansiStyles.bgColor.bgYellowBright);
expectType<CSPair>(ansiStyles.bgColor.bgBlueBright);
expectType<CSPair>(ansiStyles.bgColor.bgCyanBright);
expectType<CSPair>(ansiStyles.bgColor.bgMagentaBright);
expectType<CSPair>(ansiStyles.bgColor.bgWhiteBright);

expectType<string>(ansiStyles.bgColor.close);

// --- Modifiers ---
expectType<CSPair>(ansiStyles.modifier.bold);
expectType<CSPair>(ansiStyles.modifier.dim);
expectType<CSPair>(ansiStyles.modifier.hidden);
expectType<CSPair>(ansiStyles.modifier.inverse);
expectType<CSPair>(ansiStyles.modifier.italic);
expectType<CSPair>(ansiStyles.modifier.reset);
expectType<CSPair>(ansiStyles.modifier.strikethrough);
expectType<CSPair>(ansiStyles.modifier.underline);
expectType<CSPair>(ansiStyles.modifier.overline);

// -- Top level --
// --- Foreground color ---
expectType<CSPair>(ansiStyles.black);
expectType<CSPair>(ansiStyles.red);
expectType<CSPair>(ansiStyles.green);
expectType<CSPair>(ansiStyles.yellow);
expectType<CSPair>(ansiStyles.blue);
expectType<CSPair>(ansiStyles.cyan);
expectType<CSPair>(ansiStyles.magenta);
expectType<CSPair>(ansiStyles.white);

expectType<CSPair>(ansiStyles.gray);
expectType<CSPair>(ansiStyles.grey);

expectType<CSPair>(ansiStyles.blackBright);
expectType<CSPair>(ansiStyles.redBright);
expectType<CSPair>(ansiStyles.greenBright);
expectType<CSPair>(ansiStyles.yellowBright);
expectType<CSPair>(ansiStyles.blueBright);
expectType<CSPair>(ansiStyles.cyanBright);
expectType<CSPair>(ansiStyles.magentaBright);
expectType<CSPair>(ansiStyles.whiteBright);

// --- Background color ---
expectType<CSPair>(ansiStyles.bgBlack);
expectType<CSPair>(ansiStyles.bgRed);
expectType<CSPair>(ansiStyles.bgGreen);
expectType<CSPair>(ansiStyles.bgYellow);
expectType<CSPair>(ansiStyles.bgBlue);
expectType<CSPair>(ansiStyles.bgCyan);
expectType<CSPair>(ansiStyles.bgMagenta);
expectType<CSPair>(ansiStyles.bgWhite);

expectType<CSPair>(ansiStyles.bgGray);
expectType<CSPair>(ansiStyles.bgGrey);

expectType<CSPair>(ansiStyles.bgBlackBright);
expectType<CSPair>(ansiStyles.bgRedBright);
expectType<CSPair>(ansiStyles.bgGreenBright);
expectType<CSPair>(ansiStyles.bgYellowBright);
expectType<CSPair>(ansiStyles.bgBlueBright);
expectType<CSPair>(ansiStyles.bgCyanBright);
expectType<CSPair>(ansiStyles.bgMagentaBright);
expectType<CSPair>(ansiStyles.bgWhiteBright);

// --- Modifiers ---
expectType<CSPair>(ansiStyles.bold);
expectType<CSPair>(ansiStyles.dim);
expectType<CSPair>(ansiStyles.hidden);
expectType<CSPair>(ansiStyles.inverse);
expectType<CSPair>(ansiStyles.italic);
expectType<CSPair>(ansiStyles.reset);
expectType<CSPair>(ansiStyles.strikethrough);
expectType<CSPair>(ansiStyles.underline);

// --- ModifierName ---
expectAssignable<ModifierName>('strikethrough');
expectError<ModifierName>('delete');

// --- ForegroundColorName ---
expectAssignable<ForegroundColorName>('blue');
expectError<ForegroundColorName>('pink');

// --- ForegroundColorName ---
expectAssignable<BackgroundColorName>('bgBlue');
expectError<BackgroundColorName>('bgPink');

// --- ColorName ---
expectAssignable<ColorName>('blue');
expectAssignable<ColorName>('bgBlue');
expectError<ColorName>('pink');
expectError<ColorName>('bgPink');

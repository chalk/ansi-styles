import * as cssColors from 'color-name';

declare namespace ansiStyles {
	interface ColorConvert {
		/**
		The RGB color space.

		@param red - (`0`-`255`)
		@param green - (`0`-`255`)
		@param blue - (`0`-`255`)
		*/
		rgb(red: number, green: number, blue: number): string;

		/**
		The HSL color space.

		@param hue - (`0`-`360`)
		@param saturation - (`0`-`100`)
		@param lightness - (`0`-`100`)
		*/
		hsl(hue: number, saturation: number, lightness: number): string;

		/**
		The HSV color space.

		@param hue - (`0`-`360`)
		@param saturation - (`0`-`100`)
		@param value - (`0`-`100`)
		*/
		hsv(hue: number, saturation: number, value: number): string;

		/**
		The HSV color space.

		@param hue - (`0`-`360`)
		@param whiteness - (`0`-`100`)
		@param blackness - (`0`-`100`)
		*/
		hwb(hue: number, whiteness: number, blackness: number): string;

		/**
		The CMYK color space.

		@param cyan - (`0`-`100`)
		@param magenta - (`0`-`100`)
		@param yellow - (`0`-`100`)
		@param black - (`0`-`100`)
		*/
		cmyk(cyan: number, magenta: number, yellow: number, black: number): string;

		/**
		The XYZ color space.

		@param x - (`0`-`100`)
		@param y - (`0`-`100`)
		@param z - (`0`-`100`)
		*/
		xyz(x: number, y: number, z: number): string;

		/**
		The LAB color space.

		@param x - (`0`-`100`)
		@param y - (`0`-`100`)
		@param z - (`0`-`100`)
		*/
		lab(lightness: number, a: number, b: number): string;

		/**
		The LCH/HCL color space.

		@param lightness - (`0`-`100`)
		@param chroma - (`0`-`100`)
		@param hue - (`0`-`360`)
		*/
		lch(lightness: number, chroma: number, hue: number): string;

		/**
		The RGB HEX color space.

		@param hex - A hexadecimal string containing RGB data.
		*/
		hex(hex: string): string;

		/**
		@param keyword - A CSS color name.
		*/
		keyword(keyword: keyof typeof cssColors): string;

		/**
		Use a [4-bit unsigned number](https://en.wikipedia.org/wiki/ANSI_escape_code#3/4-bit)
		to set text color.
		*/
		ansi(ansi: number): string;

		/**
		Use an [8-bit unsigned number](https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit)
		to set text color.
		*/
		ansi256(ansi: number): string;

		/**
		The HCG color space.

		@param hue - (`0`-`360`)
		@param chroma - (`0`-`100`)
		@param gray - (`0`-`100`)
		*/
		hcg(hue: number, chroma: number, gray: number): string;

		/**
		The Apple RGB 16-bit color space.

		@param red - (`0`-`65535`)
		@param green - (`0`-`65535`)
		@param blue - (`0`-`65535`)
		*/
		apple(r16: number, g16: number, b16: number): string;

		/**
		Grayscale color.

		@param gray - (`0`-`100`)
		*/
		gray(gray: number): string;
	}

	interface CSPair {
		/**
		The ANSI terminal control sequence for starting this style.
		*/
		readonly open: string;

		/**
		The ANSI terminal control sequence for ending this style.
		*/
		readonly close: string;
	}

	interface ColorBase {
		readonly ansi: ColorConvert;
		readonly ansi256: ColorConvert;
		readonly ansi16m: ColorConvert;

		/**
		The ANSI terminal control sequence for ending this color.
		*/
		readonly close: string;
	}

	interface Modifier {
		/**
		Resets the current color chain.
		*/
		readonly reset: CSPair;

		/**
		Make text bold.
		*/
		readonly bold: CSPair;

		/**
		Emitting only a small amount of light.
		*/
		readonly dim: CSPair;

		/**
		Make text italic. (Not widely supported)
		*/
		readonly italic: CSPair;

		/**
		Make text underline. (Not widely supported)
		*/
		readonly underline: CSPair;

		/**
		Inverse background and foreground colors.
		*/
		readonly inverse: CSPair;

		/**
		Prints the text, but makes it invisible.
		*/
		readonly hidden: CSPair;

		/**
		Puts a horizontal line through the center of the text. (Not widely supported)
		*/
		readonly strikethrough: CSPair;
	}

	interface ForegroundColor {
		readonly black: CSPair;
		readonly red: CSPair;
		readonly green: CSPair;
		readonly yellow: CSPair;
		readonly blue: CSPair;
		readonly cyan: CSPair;
		readonly magenta: CSPair;
		readonly white: CSPair;

		/**
		Alias for `blackBright`.
		*/
		readonly gray: CSPair;

		/**
		Alias for `blackBright`.
		*/
		readonly grey: CSPair;

		readonly blackBright: CSPair;
		readonly redBright: CSPair;
		readonly greenBright: CSPair;
		readonly yellowBright: CSPair;
		readonly blueBright: CSPair;
		readonly cyanBright: CSPair;
		readonly magentaBright: CSPair;
		readonly whiteBright: CSPair;
	}

	interface BackgroundColor {
		readonly bgBlack: CSPair;
		readonly bgRed: CSPair;
		readonly bgGreen: CSPair;
		readonly bgYellow: CSPair;
		readonly bgBlue: CSPair;
		readonly bgCyan: CSPair;
		readonly bgMagenta: CSPair;
		readonly bgWhite: CSPair;

		/**
		Alias for `bgBlackBright`.
		*/
		readonly bgGray: CSPair;

		/**
		Alias for `bgBlackBright`.
		*/
		readonly bgGrey: CSPair;

		readonly bgBlackBright: CSPair;
		readonly bgRedBright: CSPair;
		readonly bgGreenBright: CSPair;
		readonly bgYellowBright: CSPair;
		readonly bgBlueBright: CSPair;
		readonly bgCyanBright: CSPair;
		readonly bgMagentaBright: CSPair;
		readonly bgWhiteBright: CSPair;
	}
}

declare const ansiStyles: {
	readonly modifier: ansiStyles.Modifier;
	readonly color: ansiStyles.ForegroundColor & ansiStyles.ColorBase;
	readonly bgColor: ansiStyles.BackgroundColor & ansiStyles.ColorBase;
	readonly codes: ReadonlyMap<number, number>;
} & ansiStyles.BackgroundColor & ansiStyles.ForegroundColor & ansiStyles.Modifier;

export = ansiStyles;

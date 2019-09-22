import * as cssColors from 'color-name';

declare namespace ansiStyles {
	interface ColorConvert {
		/**
		The RGB color space

		@param red (0-255)
		@param green (0-255)
		@param blue (0-255)
		*/
		rgb(red: number, green: number, blue: number): string;

		/**
		The HSL color space

		@param hue (0-360)
		@param saturation (0-100)
		@param lightness (0-100)
		*/
		hsl(hue: number, saturation: number, lightness: number): string;

		/**
		The HSV color space

		@param hue (0-360)
		@param saturation (0-100)
		@param value (0-100)
		*/
		hsv(hue: number, saturation: number, value: number): string;

		/**
		The HSV color space

		@param hue (0-360)
		@param whiteness (0-100)
		@param blackness (0-100)
		*/
		hwb(hue: number, whiteness: number, blackness: number): string;

		/**
		The CMYK color space

		@param cyan (0-100)
		@param magenta (0-100)
		@param yellow (0-100)
		@param black (0-100)
		*/
		cmyk(cyan: number, magenta: number, yellow: number, black: number): string;

		/**
		The XYZ color space

		@param x (0-100)
		@param y (0-100)
		@param z (0-100)
		*/
		xyz(x: number, y: number, z: number): string;

		/**
		The LAB color space

		@param x (0-100)
		@param y (0-100)
		@param z (0-100)
		*/
		lab(lightness: number, a: number, b: number): string;

		/**
		The LCH/HCL color space

		@param lightness (0-100)
		@param chroma (0-100)
		@param hue (0-360)
		*/
		lch(lightness: number, chroma: number, hue: number): string;

		/**
		The RGB HEX color space

		@param hex A hexadecimal string containing RGB data
		*/
		hex(hex: string): string;

		/** @param keyword A CSS color name */
		keyword(keyword: keyof typeof cssColors): string;

		ansi(ansi: number): string;
		ansi256(ansi: number): string;

		/**
		The HCG color space

		@param hue (0-360)
		@param chroma (0-100)
		@param gray (0-100)
		*/
		hcg(hue: number, chroma: number, gray: number): string;

		/**
		The Apple RGB 16-bit color space

		@param red (0-65535)
		@param green (0-65535)
		@param blue (0-65535)
		*/
		apple(r16: number, g16: number, b16: number): string;

		/**
		Grayscale color

		@param gray (0-100)
		*/
		gray(gray: number): string;
	}

	interface CSIPair {
		/** The ANSI terminal Control Sequence for starting this style */
		readonly open: string;

		/** The ANSI terminal Control Sequence for ending this style */
		readonly close: string;
	}

	interface ColorBase<Close extends string> {
		readonly ansi: ColorConvert;
		readonly ansi256: ColorConvert;
		readonly ansi16m: ColorConvert;

		/** The ANSI terminal Control Sequence for ending this color */
		readonly close: Close;
	}

	interface Modifier {
		readonly bold: CSIPair;
		readonly dim: CSIPair;
		readonly hidden: CSIPair;
		readonly inverse: CSIPair;
		readonly italic: CSIPair;
		readonly reset: CSIPair;
		readonly strikethrough: CSIPair;
		readonly underline: CSIPair;
	}

	interface ForegroundColor {
		readonly black: CSIPair;
		readonly red: CSIPair;
		readonly green: CSIPair;
		readonly yellow: CSIPair;
		readonly blue: CSIPair;
		readonly cyan: CSIPair;
		readonly magenta: CSIPair;
		readonly white: CSIPair;

		readonly gray: CSIPair;
		readonly grey: CSIPair;

		readonly blackBright: CSIPair;
		readonly redBright: CSIPair;
		readonly greenBright: CSIPair;
		readonly yellowBright: CSIPair;
		readonly blueBright: CSIPair;
		readonly cyanBright: CSIPair;
		readonly magentaBright: CSIPair;
		readonly whiteBright: CSIPair;
	}

	interface BackgroundColor {
		readonly bgBlack: CSIPair;
		readonly bgRed: CSIPair;
		readonly bgGreen: CSIPair;
		readonly bgYellow: CSIPair;
		readonly bgBlue: CSIPair;
		readonly bgCyan: CSIPair;
		readonly bgMagenta: CSIPair;
		readonly bgWhite: CSIPair;

		readonly bgGray: CSIPair;
		readonly bgGrey: CSIPair;

		readonly bgBlackBright: CSIPair;
		readonly bgRedBright: CSIPair;
		readonly bgGreenBright: CSIPair;
		readonly bgYellowBright: CSIPair;
		readonly bgBlueBright: CSIPair;
		readonly bgCyanBright: CSIPair;
		readonly bgMagentaBright: CSIPair;
		readonly bgWhiteBright: CSIPair;
	}
}

declare const ansiStyles: {
	readonly modifier: ansiStyles.Modifier;
	readonly color: ansiStyles.ForegroundColor & ansiStyles.ColorBase<'\u001B[39m'>;
	readonly bgColor: ansiStyles.BackgroundColor & ansiStyles.ColorBase<'\u001B[49m'>;
	readonly codes: ReadonlyMap<number, number>;
} & ansiStyles.BackgroundColor & ansiStyles.ForegroundColor & ansiStyles.Modifier;

export = ansiStyles;

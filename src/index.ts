export const SVG = class SVG {
	constructor(str?: string) {}
	parse(str: string) {
		const svg = new SVG();

		return svg;
	}
	getElements() {}
	addPath(str: string) {}
	fromPath(path: string) {
		const svg = new SVG();
		svg.addPath(path);
		return svg;
	}
};

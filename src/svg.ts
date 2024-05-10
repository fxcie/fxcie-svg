import { pathToNodes } from "./pathToNodes";
import { modifyPath, nodesToPath } from "./modifyPath";

export class SVG {
	private constructor(str?: string) {}

	static readonly nodesToPath = nodesToPath;
	static readonly modifyPath = modifyPath;
	static readonly pathToNodes = pathToNodes;
}

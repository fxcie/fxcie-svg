import { pathToNodes } from "./pathToNodes.js";
import { modifyPath, nodesToPath } from "./modifyPath.js";

export class SVG {
	private constructor(str?: string) {}

	static readonly nodesToPath = nodesToPath;
	static readonly modifyPath = modifyPath;
	static readonly pathToNodes = pathToNodes;
}

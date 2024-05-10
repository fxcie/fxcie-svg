import { PathNode } from "./svg.types";
import { pathToNodes } from "./pathToNodes";
import { modifyPath } from "./modifyPath";

export class SVG {
	private constructor(str?: string) {}

	static nodesToPath(nodes: PathNode[]): string {
		return nodes.map((node) => node.join()).join();
	}

	static readonly modifyPath = modifyPath;
	static readonly pathToNodes = pathToNodes;
}

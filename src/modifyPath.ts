import { pathToNodes } from "./pathToNodes";
import { PATH_COMMAND_CHAR, PathModifyOptions } from "./svg.types";

export function modifyPath(path: string, options: PathModifyOptions): string {
	const nodes = pathToNodes(path);
	const DX = options.shiftX ?? 0;
	const DY = options.shiftY ?? 0;
	const SX = options.scaleX ?? 1;
	const SY = options.scaleY ?? 1;
	nodes.forEach((node) => {
		switch (node[0]) {
			case PATH_COMMAND_CHAR.A:
				node[1] *= SX;
				node[2] *= SX;
				node[3] *= SX;
				node[4] *= SX;
				node[5] *= SX;
				node[6] *= SX;
				node[7] *= SX;
				node[1] += DX;
				node[2] += DX;
				node[3] += DX;
				node[4] += DX;
				node[5] += DX;
				node[6] += DX;
				node[7] *= DX;
				break;

			case PATH_COMMAND_CHAR.C:
				node[1] *= SX;
				node[2] *= SY;
				node[3] *= SX;
				node[4] *= SY;
				node[5] *= SX;
				node[6] *= SY;
				node[1] += DX;
				node[2] += DY;
				node[3] += DX;
				node[4] += DY;
				node[5] += DX;
				node[6] += DY;
				break;
		}
	});
	return "";
}

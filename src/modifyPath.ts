import { isNumber } from "@fxcie/utils";
import { pathToNodes } from "./pathToNodes";
import { PathModifyOptions, PathNode } from "./svg.types";
import { DEFAULT_DECIMAL_PLACES, PATH_COMMAND_CHAR } from "./svg.values";

export function nodesToPath(nodes: PathNode[], decimalPlaces?: number): string {
	decimalPlaces ??= DEFAULT_DECIMAL_PLACES;
	return nodes
		.map((node: PathNode) =>
			node
				// .map((value, index) =>
				// 	isNumber(value) &&
				// 	value % 1 &&
				// 	!(
				// 		node[0].toLowerCase() == PATH_COMMAND_CHAR.A &&
				// 		[3, 4, 5].indexOf(index)
				// 	)
				// 		? value.toFixed(decimalPlaces)
				// 		: value
				// )
				.join(" ")
		)
		.join("\n");
}

export function modifyPath(path: string, options: PathModifyOptions): string {
	const nodes = pathToNodes(path);
	const DX = options.shiftX ?? 0;
	const DY = options.shiftY ?? 0;
	const SX = options.scaleX ?? 1;
	const SY = options.scaleY ?? 1;
	const dp = options.decimalPlaces ?? DEFAULT_DECIMAL_PLACES;
	nodes.forEach((node) => {
		switch (node[0]) {
			case PATH_COMMAND_CHAR.A:
			case PATH_COMMAND_CHAR.a:
				node[1] *= SX;
				node[2] *= SY;
				node[6] *= SX;
				node[7] *= SY;
				if (node[0] != node[0].toLowerCase()) {
					node[1] += DX;
					node[2] += DY;
					node[6] += DX;
					node[7] += DY;
				}
				break;

			case PATH_COMMAND_CHAR.C:
			case PATH_COMMAND_CHAR.c:
				node[1] *= SX;
				node[2] *= SY;
				node[3] *= SX;
				node[4] *= SY;
				node[5] *= SX;
				node[6] *= SY;
				if (node[0] != node[0].toLowerCase()) {
					node[1] += DX;
					node[2] += DY;
					node[3] += DX;
					node[4] += DY;
					node[5] += DX;
					node[6] += DY;
				}
				break;

			case PATH_COMMAND_CHAR.H:
			case PATH_COMMAND_CHAR.h:
				node[1] *= SX;
				if (node[0] != node[0].toLowerCase()) node[1] += DX;
				break;

			case PATH_COMMAND_CHAR.L:
			case PATH_COMMAND_CHAR.l:
				node[1] *= SX;
				node[2] *= SY;
				if (node[0] != node[0].toLowerCase()) {
					node[1] += DX;
					node[2] += DY;
				}

				break;

			case PATH_COMMAND_CHAR.M:
			case PATH_COMMAND_CHAR.m:
				node[1] *= SX;
				node[2] *= SY;
				if (node[0] != node[0].toLowerCase()) {
					node[1] += DX;
					node[2] += DY;
				}

				break;

			case PATH_COMMAND_CHAR.Q:
			case PATH_COMMAND_CHAR.q:
				node[1] *= SX;
				node[2] *= SY;
				node[3] *= SX;
				node[4] *= SY;
				if (node[0] != node[0].toLowerCase()) {
					node[1] += DX;
					node[2] += DY;
					node[3] += DX;
					node[4] += DY;
				}

				break;

			case PATH_COMMAND_CHAR.S:
			case PATH_COMMAND_CHAR.s:
				node[1] *= SX;
				node[2] *= SY;
				node[3] *= SX;
				node[4] *= SY;
				if (node[0] != node[0].toLowerCase()) {
					node[1] += DX;
					node[2] += DY;
					node[3] += DX;
					node[4] += DY;
				}

				break;

			case PATH_COMMAND_CHAR.T:
			case PATH_COMMAND_CHAR.t:
				node[1] *= SX;
				node[2] *= SY;
				if (node[0] != node[0].toLowerCase()) {
					node[1] += DX;
					node[2] += DY;
				}

				break;

			case PATH_COMMAND_CHAR.V:
			case PATH_COMMAND_CHAR.v:
				node[1] *= SY;
				if (node[0] != node[0].toLowerCase()) node[1] += DY;
				break;

			case PATH_COMMAND_CHAR.Z:
			case PATH_COMMAND_CHAR.z:
				break;
		}
	});
	return nodesToPath(nodes, dp);
}

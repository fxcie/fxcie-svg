import { expect, test } from "bun:test";
import { SVG } from "../src/index.js";
import { PathNode } from "../src/svg.types.js";
import { PATH_COMMAND } from "../src/svg.values.js";

const testPath =
	"M147.5 55.8c-5.8-7.2-13.6-14.4-25.5-14.4-8.4 0-15.4 8.2-27 8.2-9 0-13-7.8-23-7.8C51.4 41.8 31 60.4 31 84.5c0 12.8 4.2 32.5 13.6 49.7C51 146.7 59.4 155 69 155c6.7 0 14.7-6.3 24.2-6.3 8.4 0 16.2 5.6 23.8 5.6 18 0 35-23.5 35-39.3 0-.8-.3-1.4-.3-2v-1c-11.8-6.3-18.2-15.7-18.2-29.3 0-11 4.8-20.5 13.6-26.7l.5-.2zm-53-8.8c13.7-4.2 26.3-14.4 26.3-32 0-1.5-.2-3.3-.4-5.3l-.2-.8C106.4 12.6 94 23.4 94 40.3c0 1.6.2 3.6.6 5.8v.8z";

test("Trying to split the string", () => {
	const nodes: PathNode[] = SVG.pathToNodes(testPath);
	console.log({ nodes });
	expect(nodes.length).toBeGreaterThan(0);
	for (const node of nodes) {
		expect(Number(node.length)).toBe(PATH_COMMAND[node[0]] + 1);
	}
	expect(nodes.length).toBe(22);
});

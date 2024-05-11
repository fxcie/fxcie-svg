const { PATH_COMMAND } = require("../lib/svg.values.js");
const { pathToNodes } = require("../lib/pathToNodes.js");
const { nodesToPath, modifyPath } = require("../lib/modifyPath.js");
const fs = require('fs');

var minifiedPath = fs.readFileSync(__dirname + '/data/minifiedPath.txt').toString();
var nodes = pathToNodes(minifiedPath);;

var formattedPath = fs.readFileSync(__dirname + '/data/formattedPath.txt').toString();

var scaledX2Path = fs.readFileSync(__dirname + '/data/scaledX2Path.txt').toString();

describe('tests', () => {
	test('formatting matches', () => {
		const nodesFromMinified = pathToNodes(minifiedPath);
		expect(nodesToPath(nodesFromMinified)).toBe(formattedPath);
	})

	test("Trying to split the string", () => {
		const testNodes = pathToNodes(minifiedPath);
		expect(testNodes.length).toBeGreaterThan(0);
		for (const testNode of testNodes) {
			expect(testNode.length).toBe(PATH_COMMAND[testNode[0]] + 1);
		}
		expect(testNodes.length).toBe(22);
	});

	test("Trying scaling path x2", () => {
		const testPath = modifyPath(minifiedPath, { scaleX: 2, scaleY: 2 });
		expect(testPath).toBe(scaledX2Path);
	});

})

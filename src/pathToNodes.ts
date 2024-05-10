import { isNonEmptyString, isString } from "@fxcie/utils";
import {
	PATH_COMMANDS_STRING,
	PATH_COMMAND_CHAR,
	SVG_ERROR,
} from "./svg.values";
import { PathNode } from "./svg.types";

export function pathToNodes(path: string): PathNode[] {
	const segments: string[] = path
		.split(
			new RegExp(`([${PATH_COMMANDS_STRING}][^${PATH_COMMANDS_STRING}]*)`, "gi")
		)
		.filter(isNonEmptyString);
	const nodes: PathNode[] = [];
	segments.forEach((segment) => {
		const [command, ...chars] = segment.split("");
		if (!isString(command)) throw new Error(SVG_ERROR.PATH_PARSE);
		if (!PATH_COMMANDS_STRING.includes(command))
			throw new Error(SVG_ERROR.PATH_PARSE + " " + command);
		const tokens = chars
			.reduce(
				(tokens: string[], char: string) => {
					const i = tokens.length - 1;
					switch (char) {
						case "-":
							{
								tokens.push(char);
							}
							break;
						case " ":
							{
								tokens.push("");
							}
							break;
						case ".":
							if (tokens[i].indexOf(char) != -1) {
								tokens.push(char);
								break;
							} // Continue
						default:
							tokens[i] += char;
					}
					return tokens;
				},
				[""]
			)
			.filter(isNonEmptyString)
			.map(Number);
		// return;
		switch (command) {
			case PATH_COMMAND_CHAR.A:
			case PATH_COMMAND_CHAR.a:
				{
					if (tokens.length % 7)
						throw new Error(
							SVG_ERROR.PATH_PARSE + ` ${command} ${tokens.length}`
						);
					while (tokens.length) {
						nodes.push([
							command,
							tokens[0],
							tokens[1],
							tokens[2],
							tokens[3] ? 1 : 0,
							tokens[4] ? 1 : 0,
							tokens[5],
							tokens[6],
						]);
						tokens.splice(0, 7);
					}
				}
				break;
			case PATH_COMMAND_CHAR.C:
			case PATH_COMMAND_CHAR.c:
				{
					if (tokens.length % 6)
						throw new Error(
							SVG_ERROR.PATH_PARSE + ` ${command} ${tokens.length}`
						);
					while (tokens.length) {
						nodes.push([
							command,
							tokens[0],
							tokens[1],
							tokens[2],
							tokens[3],
							tokens[4],
							tokens[5],
						]);
						tokens.splice(0, 6);
					}
				}
				break;
			case PATH_COMMAND_CHAR.H:
			case PATH_COMMAND_CHAR.h:
				{
					// if(tokens.length %1) throw new Error(SVG_ERROR.PATH_PARSE+' '+tokens.length);
					while (tokens.length) {
						nodes.push([command, tokens[0]]);
						tokens.splice(0, 1);
					}
				}
				break;
			case PATH_COMMAND_CHAR.L:
			case PATH_COMMAND_CHAR.l:
				{
					if (tokens.length % 2)
						throw new Error(
							SVG_ERROR.PATH_PARSE + ` ${command} ${tokens.length}`
						);
					while (tokens.length) {
						nodes.push([command, tokens[0], tokens[1]]);
						tokens.splice(0, 2);
					}
				}
				break;
			case PATH_COMMAND_CHAR.M:
			case PATH_COMMAND_CHAR.m:
				{
					if (tokens.length % 2)
						throw new Error(
							SVG_ERROR.PATH_PARSE + ` ${command} ${tokens.length}`
						);
					while (tokens.length) {
						nodes.push([command, tokens[0], tokens[1]]);
						tokens.splice(0, 2);
					}
				}
				break;
			case PATH_COMMAND_CHAR.Q:
			case PATH_COMMAND_CHAR.q:
				{
					if (tokens.length % 4)
						throw new Error(
							SVG_ERROR.PATH_PARSE + ` ${command} ${tokens.length}`
						);
					while (tokens.length) {
						nodes.push([command, tokens[0], tokens[1], tokens[2], tokens[3]]);
						tokens.splice(0, 4);
					}
				}
				break;
			case PATH_COMMAND_CHAR.S:
			case PATH_COMMAND_CHAR.s:
				{
					if (tokens.length % 4)
						throw new Error(
							SVG_ERROR.PATH_PARSE + ` ${command} ${tokens.length}`
						);
					while (tokens.length) {
						nodes.push([command, tokens[0], tokens[1], tokens[2], tokens[3]]);
						tokens.splice(0, 4);
					}
				}
				break;
			case PATH_COMMAND_CHAR.T:
			case PATH_COMMAND_CHAR.t:
				{
					if (tokens.length % 2)
						throw new Error(
							SVG_ERROR.PATH_PARSE + ` ${command} ${tokens.length}`
						);
					while (tokens.length) {
						nodes.push([command, tokens[0], tokens[1]]);
						tokens.splice(0, 2);
					}
				}
				break;
			case PATH_COMMAND_CHAR.V:
			case PATH_COMMAND_CHAR.v:
				{
					// if(tokens.length %1) throw new Error(SVG_ERROR.PATH_PARSE+' '+tokens.length);
					while (tokens.length) {
						nodes.push([command, tokens[0]]);
						tokens.splice(0, 1);
					}
				}
				break;
			case PATH_COMMAND_CHAR.Z:
			case PATH_COMMAND_CHAR.z:
				{
					if (tokens.length)
						throw new Error(
							SVG_ERROR.PATH_PARSE + ` ${command} ${tokens.length}`
						);
				}
				break;
		}
	});
	return nodes;
}

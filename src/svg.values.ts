import { PATH_COMMAND_CHAR } from "./svg.types";

export const PATH_COMMAND: Record<string, number> = {
	[PATH_COMMAND_CHAR.A]: 7,
	[PATH_COMMAND_CHAR.C]: 6,
	[PATH_COMMAND_CHAR.H]: 1,
	[PATH_COMMAND_CHAR.L]: 2,
	[PATH_COMMAND_CHAR.M]: 2,
	[PATH_COMMAND_CHAR.Q]: 4,
	[PATH_COMMAND_CHAR.S]: 4,
	[PATH_COMMAND_CHAR.T]: 2,
	[PATH_COMMAND_CHAR.V]: 1,
	[PATH_COMMAND_CHAR.Z]: 0,
};

export const PATH_COMMANDS = Object.keys(PATH_COMMAND);

export const PATH_COMMANDS_STRING = PATH_COMMANDS.join();

export enum SVG_ERROR {
	PATH_PARSE = "Path parsing error",
}

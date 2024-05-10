export enum PATH_COMMAND_CHAR {
	A = "A",
	C = "C",
	H = "H",
	L = "L",
	M = "M",
	Q = "Q",
	S = "S",
	T = "T",
	V = "V",
	Z = "Z",
	a = "a",
	c = "c",
	h = "h",
	l = "l",
	m = "m",
	q = "q",
	s = "s",
	t = "t",
	v = "v",
	z = "z",
}

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
	[PATH_COMMAND_CHAR.a]: 7,
	[PATH_COMMAND_CHAR.c]: 6,
	[PATH_COMMAND_CHAR.h]: 1,
	[PATH_COMMAND_CHAR.l]: 2,
	[PATH_COMMAND_CHAR.m]: 2,
	[PATH_COMMAND_CHAR.q]: 4,
	[PATH_COMMAND_CHAR.s]: 4,
	[PATH_COMMAND_CHAR.t]: 2,
	[PATH_COMMAND_CHAR.v]: 1,
	[PATH_COMMAND_CHAR.z]: 0,
};

export const PATH_COMMANDS = Object.keys(PATH_COMMAND);

export const PATH_COMMANDS_STRING = PATH_COMMANDS.join();

export enum SVG_ERROR {
	PATH_PARSE = "Path parsing error",
}

export const DEFAULT_DECIMAL_PLACES = 8;

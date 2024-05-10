export type PathModifyOptions = {
	scaleX?: number;
	scaleY?: number;
	shiftX?: number;
	shiftY?: number;
};

export enum PATH_COMMAND_CHAR {
	A = "a",
	C = "c",
	H = "h",
	L = "l",
	M = "m",
	Q = "q",
	S = "s",
	T = "t",
	V = "v",
	Z = "z",
}

export type PathNode =
	| [
			PATH_COMMAND_CHAR.A,
			number,
			number,
			number,
			number,
			number,
			number,
			number
	  ]
	| [PATH_COMMAND_CHAR.C, number, number, number, number, number, number]
	| [PATH_COMMAND_CHAR.H, number]
	| [PATH_COMMAND_CHAR.L, number, number]
	| [PATH_COMMAND_CHAR.M, number, number]
	| [PATH_COMMAND_CHAR.Q, number, number, number, number]
	| [PATH_COMMAND_CHAR.S, number, number, number, number]
	| [PATH_COMMAND_CHAR.T, number, number]
	| [PATH_COMMAND_CHAR.V, number]
	| [PATH_COMMAND_CHAR.Z];

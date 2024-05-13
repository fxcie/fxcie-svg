import { PATH_COMMAND_CHAR } from "./svg.values.js";

export type PathModifyOptions = {
	scaleX?: number;
	scaleY?: number;
	shiftX?: number;
	shiftY?: number;
	decimalPlaces?: number;
};

type num = number;

export type PathNode =
	| [
			PATH_COMMAND_CHAR.A | PATH_COMMAND_CHAR.a,
			num,
			num,
			num,
			0 | 1,
			0 | 1,
			num,
			num
	  ]
	| [PATH_COMMAND_CHAR.C | PATH_COMMAND_CHAR.c, num, num, num, num, num, num]
	| [PATH_COMMAND_CHAR.H | PATH_COMMAND_CHAR.h, num]
	| [PATH_COMMAND_CHAR.L | PATH_COMMAND_CHAR.l, num, num]
	| [PATH_COMMAND_CHAR.M | PATH_COMMAND_CHAR.m, num, num]
	| [PATH_COMMAND_CHAR.Q | PATH_COMMAND_CHAR.q, num, num, num, num]
	| [PATH_COMMAND_CHAR.S | PATH_COMMAND_CHAR.s, num, num, num, num]
	| [PATH_COMMAND_CHAR.T | PATH_COMMAND_CHAR.t, num, num]
	| [PATH_COMMAND_CHAR.V | PATH_COMMAND_CHAR.v, num]
	| [PATH_COMMAND_CHAR.Z | PATH_COMMAND_CHAR.z];

// Extract from @fxcie/utils@0.0.8
// Using copy as needing system to work from CDN.
export const isString = (str: any): str is string =>
	typeof str === "string" || str instanceof String;
export const isNonEmptyString = (str) => isString(str) && str.length !== 0;

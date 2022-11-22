import { ValidationError } from "./types";

export declare class TotalValidationError implements Error {
	message: any;
	readonly name: "TotalValidationError";
	readonly errors: ValidationError[];
	constructor(errors: ValidationError[]);
}

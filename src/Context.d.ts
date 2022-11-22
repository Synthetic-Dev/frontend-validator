import { ValidationError } from "./types";
import ContextItem from "./context-item";
export declare type Optional =
	| {
			nullable: boolean;
			checkFalsy: boolean;
	  }
	| false;
export declare class Context {
	readonly value: any;
	readonly stack: ReadonlyArray<ContextItem>;
	readonly optional: Optional;
	readonly message?: any;
	private readonly _errors;
	get errors(): ReadonlyArray<ValidationError>;
	constructor(
		value: any,
		stack: ReadonlyArray<ContextItem>,
		optional: Optional,
		message?: any
	);
	shouldRun(): boolean;
	addError(message: any, nestedErrors: ValidationError[]): void;
}
export declare type ReadonlyContext = Pick<
	Context,
	Exclude<keyof Context, "setData" | "addFieldInstances" | "addError">
>;

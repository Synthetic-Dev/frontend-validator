import { Context, ReadonlyContext } from "./Context";
import { ContextBuilder } from "./ContextBuilder";
import { ContextRunner } from "./context-runner";
import { ValidationError } from "./types";
export declare type ErrorFormatter<T = any> = (error: ValidationError) => T;
export declare class Result<T = any> {
	private formatter;
	private readonly errors;
	constructor(
		formatter: ErrorFormatter<T>,
		errors: readonly ValidationError[]
	);
	array(options?: { onlyFirstError?: boolean }): T[];
	mapped(): Record<string, T>;
	formatWith<T2>(formatter: ErrorFormatter<T2>): Result<T2>;
	isEmpty(): boolean;
	throw(): void;
}
export declare class ResultWithContext extends Result {
	readonly context: ReadonlyContext;
	constructor(context: ReadonlyContext);
}
export declare class ContextRunnerImpl implements ContextRunner {
	private readonly builderOrContext;
	constructor(builderOrContext: ContextBuilder | Context);
	run(): Promise<ResultWithContext>;
}

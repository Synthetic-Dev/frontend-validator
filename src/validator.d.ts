import { ErrorFormatter } from "./ContextRunnerImpl";
import { ValidationChain } from "./validation-chain";
export declare class Validator {
	private _chains;
	constructor();
	validate(value?: any, message?: any): ValidationChain;
	exec(formatter: ErrorFormatter): Promise<void>;
}

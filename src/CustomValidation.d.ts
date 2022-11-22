import { CustomValidator } from "./types";
import { Context } from "./Context";
import { ContextItem } from "./context-item";
export declare class CustomValidation implements ContextItem {
	private readonly validator;
	private readonly negated;
	message: any;
	constructor(validator: CustomValidator, negated: boolean);
	run(context: Context, value: any): Promise<void>;
}

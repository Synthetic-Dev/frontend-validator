import { Context } from "./Context";
export interface ContextItem {
	run(context: Context, value: any): Promise<void>;
}

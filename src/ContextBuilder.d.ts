import ContextItem from "./context-item";
import { Context, Optional } from "./Context";

export declare class ContextBuilder {
	private readonly stack;
	private value;
	private message;
	private optional;
	setValue(value: any): this;
	setMessage(message: any): this;
	addItem(...items: ContextItem[]): this;
	setOptional(options: Optional): this;
	build(): Context;
}

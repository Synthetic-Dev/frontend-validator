import Context from "./Context.js";

export default class ContextBuilder {
	constructor() {
		this.stack = [];
		this.optional = false;
	}
	setValue(value) {
		this.value = value;
		return this;
	}
	setMessage(message) {
		this.message = message;
		return this;
	}
	addItem(...items) {
		this.stack.push(...items);
		return this;
	}
	setOptional(options) {
		this.optional = options;
		return this;
	}
	build() {
		return new Context(this.value, this.stack, this.optional, this.message);
	}
}

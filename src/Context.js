export default class Context {
	constructor(value, stack, optional, message) {
		this.value = value;
		this.stack = stack;
		this.optional = optional;
		this.message = message;
		this._errors = [];
		this.dataMap = new Map();
	}
	get errors() {
		return this._errors;
	}
	shouldRun() {
		const { optional } = this;
		const checks = optional
			? [
					(value) => value !== undefined,
					(value) => (optional.nullable ? value != null : true),
					(value) => (optional.checkFalsy ? value : true),
			  ]
			: [];

		return checks.every((check) => check(this.value));
	}
	addError(message, nestedErrors) {
		const msg = message || this.message || "Invalid value";
		this._errors.push({
			msg,
			nestedErrors: nestedErrors,
		});
	}
}

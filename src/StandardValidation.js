function toString(value, deep = true) {
	if (Array.isArray(value) && value.length && deep) {
		return toString(value[0], false);
	} else if (value instanceof Date) {
		return value.toISOString();
	} else if (value && typeof value === "object" && value.toString) {
		if (typeof value.toString !== "function") {
			return Object.getPrototypeOf(value).toString.call(value);
		}
		return value.toString();
	} else if (value == null || (isNaN(value) && !value.length)) {
		return "";
	}
	return String(value);
}

export default class StandardValidation {
	constructor(validator, negated, options = []) {
		this.validator = validator;
		this.negated = negated;
		this.options = options;
	}
	async run(context, value) {
		const result = this.validator(toString(value), ...this.options);
		if (this.negated ? result : !result) {
			context.addError(this.message, value);
		}
	}
}

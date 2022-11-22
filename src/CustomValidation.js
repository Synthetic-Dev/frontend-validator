export default class CustomValidation {
	constructor(validator, negated) {
		this.validator = validator;
		this.negated = negated;
	}
	async run(context, value) {
		try {
			const result = this.validator(value);
			const actualResult = await result;
			const isPromise = result && result.then;
			const failed = this.negated ? actualResult : !actualResult;
			// A promise that was resolved only adds an error if negated.
			// Otherwise it always suceeds
			if ((!isPromise && failed) || (isPromise && this.negated)) {
				context.addError(this.message, value);
			}
		} catch (err) {
			if (this.negated) {
				return;
			}
			context.addError(
				this.message || (err instanceof Error ? err.message : err),
				value
			);
		}
	}
}

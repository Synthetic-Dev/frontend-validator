export default class TotalValidationError extends Error {
	constructor(errors) {
		let message = "Could not validate value,";
		for (let err of errors) {
			message += "\n\t" + err.msg;
		}
		super(message);

		this.name = "TotalValidationError";
		this.errors = errors;
	}
}

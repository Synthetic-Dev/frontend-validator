import bindAll from "./bindAll.js";
import ContextBuilder from "./ContextBuilder.js";
import { ContextRunnerImpl, Result } from "./ContextRunnerImpl.js";
import ValidatorsImpl from "./ValidatorsImpl.js";
import ContextHandlerImpl from "./ContextHandlerImpl.js";
import TotalValidationError from "./TotalValidationError.js";

export class Validator {
	constructor() {
		this._chains = [];
	}

	validate(value, message) {
		const builder = new ContextBuilder()
			.setValue(value)
			.setMessage(message);
		const runner = new ContextRunnerImpl(builder);
		const exec = () => {
			return runner.run();
		};
		const chain = { exec };
		Object.assign(
			chain,
			bindAll(runner),
			bindAll(new ValidatorsImpl(builder, chain)),
			bindAll(new ContextHandlerImpl(builder, chain)),
			{ builder }
		);
		this._chains.push(chain);
		return chain;
	}

	async exec(formatter) {
		formatter = formatter ?? ((error) => error);

		const errors = [];
		for (const chain of this._chains) {
			const res = await chain.exec();
			errors.concat(res.errors);
		}

		const result = new Result(formatter, errors);
		if (!result.isEmpty()) {
			throw new TotalValidationError(result.array());
		}
	}
}

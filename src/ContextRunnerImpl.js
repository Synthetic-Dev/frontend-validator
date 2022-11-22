import bindAll from "./bindAll.js";
import Context from "./Context.js";

export class Result {
	constructor(formatter, errors) {
		this.formatter = formatter;
		this.errors = errors;
	}
	array(options) {
		return options && options.onlyFirstError
			? Object.values(this.mapped())
			: this.errors.map(this.formatter);
	}
	mapped() {
		return this.errors.reduce((mapping, error) => {
			if (!mapping.value) {
				mapping.value = this.formatter(error);
			}
			return mapping;
		}, {});
	}
	formatWith(formatter) {
		return new Result(formatter, this.errors);
	}
	isEmpty() {
		return this.errors.length === 0;
	}
	throw() {
		if (!this.isEmpty()) {
			throw Object.assign(new Error(), bindAll(this));
		}
	}
}

export class ResultWithContext extends Result {
	constructor(context) {
		super((error) => error, context.errors);
		this.context = context;
	}
}

export class ContextRunnerImpl {
	constructor(builderOrContext) {
		this.builderOrContext = builderOrContext;
	}
	async run() {
		const context =
			this.builderOrContext instanceof Context
				? this.builderOrContext
				: this.builderOrContext.build();

		if (context.shouldRun()) {
			for (const contextItem of context.stack) {
				try {
					await contextItem.run(context, context.value);
				} catch (e) {
					throw e;
				}
			}
		}

		return new ResultWithContext(context);
	}
}

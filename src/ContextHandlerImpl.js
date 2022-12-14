export default class ContextHandlerImpl {
	constructor(builder, chain) {
		this.builder = builder;
		this.chain = chain;
	}
	// bail() {
	//     this.builder.addItem(new bail_1.Bail());
	//     return this.chain;
	// }
	// if(condition) {
	//     if ('run' in condition) {
	//         this.builder.addItem(new context_items_1.ChainCondition(condition));
	//     }
	//     else if (typeof condition === 'function') {
	//         this.builder.addItem(new context_items_1.CustomCondition(condition));
	//     }
	//     else {
	//         throw new Error('express-validator: condition is not a validation chain nor a function');
	//     }
	//     return this.chain;
	// }
	optional(options = true) {
		if (typeof options === "boolean") {
			this.builder.setOptional(
				options ? { checkFalsy: false, nullable: false } : false
			);
		} else {
			this.builder.setOptional({
				checkFalsy: !!options.checkFalsy,
				nullable: !!options.nullable,
			});
		}
		return this.chain;
	}
}

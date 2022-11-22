import { ContextBuilder } from "./ContextBuilder";
import { Optional } from "./Context";
import { CustomValidator } from "./types";
import { ContextHandler } from "./context-handler";
import { ValidationChain } from "./validation-chain";
export declare class ContextHandlerImpl<Chain>
	implements ContextHandler<Chain>
{
	private readonly builder;
	private readonly chain;
	constructor(builder: ContextBuilder, chain: Chain);
	// bail(): Chain;
	// if(condition: CustomValidator | ValidationChain): Chain;
	optional(options?: Optional | true): Chain;
}

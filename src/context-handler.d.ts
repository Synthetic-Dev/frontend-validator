import { CustomValidator } from "./types";
import { Optional } from "./Context";
import { ValidationChain } from "./validation-chain";
export interface ContextHandler<Chain> {
	bail(): Chain;
	if(condition: CustomValidator | ValidationChain): Chain;
	optional(options?: Partial<Optional> | true): Chain;
}

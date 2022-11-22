import { ContextBuilder } from "./ContextBuilder";
import { Validators } from "./validators";
import { ContextHandler } from "./context-handler";
import { ContextRunner } from "./context-runner";

export interface ValidationChain
	extends Validators<ValidationChain>,
		ContextHandler<ValidationChain>,
		ContextRunner {
	// exec(): Promise<void>;
	builder: ContextBuilder;
}

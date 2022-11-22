import { ReadonlyContext } from "./Context";
import { Result } from "./ContextRunnerImpl";
export interface ContextRunner {
	run(): Promise<
		Result & {
			context: ReadonlyContext;
		}
	>;
}

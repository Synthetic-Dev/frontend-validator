export declare type CustomValidator = (input: any) => any;
export declare type StandardValidator = (
	input: string,
	...options: any[]
) => boolean;
export declare type DynamicMessageCreator = (value: any) => any;

export declare type ValidationError =
	| {
			param: "_error";
			msg: any;
			nestedErrors: ValidationError[];
			location?: undefined;
			value?: undefined;
	  }
	| {
			location: Location;
			param: string;
			value: any;
			msg: any;
			nestedErrors?: unknown[];
	  };

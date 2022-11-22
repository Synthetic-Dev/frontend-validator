const bindAll = (object) => {
	const protoKeys = Object.getOwnPropertyNames(Object.getPrototypeOf(object));
	protoKeys.forEach((key) => {
		const maybeFn = object[key];
		if (typeof maybeFn === "function" && key !== "constructor") {
			object[key] = maybeFn.bind(object);
		}
	});
	return object;
};
export default bindAll;

declare let global: any;

global.hello = () => {
	Logger.log("Hello world.");
}

export {};  // Ensure this file is parsed as a module.
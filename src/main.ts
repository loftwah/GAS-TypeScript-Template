declare let global: any;

/**
 * Serve web app
 */
global.doGet = (e) => {
	return HtmlService.createHtmlOutput('<b>Hello world!</b>');
}

export {};  // Ensure this file is parsed as a module.
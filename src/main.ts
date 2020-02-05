// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;

/**
 * Serve web app
 */
global.doGet = (): GoogleAppsScript.HTML.HtmlOutput => {
	return HtmlService.createHtmlOutput('<b>Hello world!</b>');
}

export {};  // Ensure this file is parsed as a module.
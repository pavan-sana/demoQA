const { defineConfig } = require("cypress");

module.exports = defineConfig({
  	viewportWidth: 1920,
	viewportHeight: 1080,
	numTestsKeptInMemory: 0,
	defaultCommandTimeout: 5000,
	video: false,
	retries: {
		runMode: 0,
		openMode: 0
	},
	chromeWebSecurity: false,
  	e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demoqa.com/'
  },
});

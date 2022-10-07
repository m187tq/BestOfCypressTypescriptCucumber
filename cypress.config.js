const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: '2ytchd',
  theme: 'dark',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

      // implement node event listeners here
      const file = config.env.configFile || ''
      return getConfigurationByFile(file)
    },
    //specPattern: "cypress/e2e/*.{js,jsx,ts,tsx,feature}",
    //excludeSpecPattern: "cypress/e2e/other/*.js",
    specPattern: "cypress/e2e/features/*.feature",
    // baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    reporter: 'mochawesome',
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    failOnStatusCode: false,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    retries: {
      runMode: 0,
      openMode: 0
    },
    env: {
      first_name: 'Cypress',
      last_name: 'Automation',
      loginName: 'webdriverio2',
      password: 'webdriverio2',
      automationteststore_url: 'https://automationteststore.com',
      automationteststore_homepage: 'https://automationteststore.com',
      rahulshettyacademy_homepage: 'https://rahulshettyacademy.com',
      rahulshettyacademy_url: 'https://rahulshettyacademy.com',
      webdriveruniversity_url: 'http://www.webdriveruniversity.com',
      webdriveruniversity_homepage: 'http://www.webdriveruniversity.com'
    }
  },
});

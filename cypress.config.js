const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  allowCypressEnv: false,
  // intento no fiable para solucionar flekiness:
  // retries: 1,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    allowCypressEnv: true
  },
});

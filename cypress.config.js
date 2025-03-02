const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://star-wars-phi.vercel.app', 
    setupNodeEvents(on, config) {
      // Add custom event listeners if needed
    },
    supportFile: 'cypress/support/e2e.js'
  },
  video: false,
  screenshotOnRunFailure: false,
  retries: 1,
  viewportWidth: 1280,
  viewportHeight: 720,
  defaultCommandTimeout: 10000
});
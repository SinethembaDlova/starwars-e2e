const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://star-wars-phi.vercel.app', 
    setupNodeEvents(on, config) {
      // Add custom event listeners if needed
    },
  },
  video: false,
  retries: 2,
});
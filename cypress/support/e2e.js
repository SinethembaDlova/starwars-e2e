import '@testing-library/cypress/add-commands'
import 'cypress-axe'

// Add window.store to access Redux store during tests
Cypress.Commands.add('getStore', () => {
  return cy.window().its('store')
})
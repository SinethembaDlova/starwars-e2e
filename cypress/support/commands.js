// Custom command to check if element exists
Cypress.Commands.add('exists', { prevSubject: true }, (subject) => {
    cy.wrap(subject).should('exist')
    return cy.wrap(subject)
  })
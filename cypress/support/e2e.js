import '@testing-library/cypress/add-commands'
import 'cypress-axe'

// Add window.store to access Redux store during tests
Cypress.Commands.add('getStore', () => {
  return cy.window().its('store')
})

Cypress.Commands.add('getMovieCards', () => {
    return cy.get('[aria-label="movie-card"]', { timeout: 15000 });
});

Cypress.Commands.add('getMovieCard', (index = 0) => {
    return cy.get('[aria-label="movie-card"]', { timeout: 15000 }).eq(index);
});

Cypress.Commands.add('getMovieElementbyAriaLabel', (aria) => {
    return cy.get(`[aria-label=${aria}]`, { timeout: 10000 });
});

Cypress.Commands.add('stubMoviesApi', () => {
    cy.intercept('GET', 'https://swapi.dev/api/films/', { fixture: 'movies.json' }).as('getMovies');
  });
  
Cypress.Commands.add('stubMovieApi', (id) => {
    cy.intercept(
      'GET',
      `https://swapi.dev/api/films/${id}/`,
      { fixture: `movie-${id}.json` }
    ).as(`getMovie${id}`);
});
describe('Home Page Redirect Test', () => {
    it('should automatically redirect to /movies when visiting the home page', () => {
      cy.visit('/');
      cy.location('pathname').should('eq', '/movies');
    });
});
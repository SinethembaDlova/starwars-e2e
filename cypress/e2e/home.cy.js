describe('Home Page Redirect Test', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('should automatically redirect to /movies when visiting the home page', () => {
    cy.location('pathname').should('eq', '/movies');
  });

  it('should display app logo on the nav bar and when you click the the logo it should redirect you to home screen', () => {
    cy.getMovieElementbyAriaLabel("nav").within(()=>{
      cy.getMovieElementbyAriaLabel("logo").should('be.visible').click();
    })
    cy.url().should('include', '/');
    cy.url().should('include', '/movies');
    cy.url().should('not.include', '/movies/1');
  });
});
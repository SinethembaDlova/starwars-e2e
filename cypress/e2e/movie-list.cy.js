describe('Movie List Page', () => {
  beforeEach(() => {
    cy.stubMoviesApi();
    cy.visit('/movies');
  })


  it('should display app logo on the nav bar and when you click the the logo it should redirect you to home screen', () => {
    cy.getMovieElementbyAriaLabel("nav").within(()=>{
      cy.getMovieElementbyAriaLabel("logo").should('be.visible').click();
    })
    cy.url().should('include', '/');
    cy.url().should('include', '/movies');
    cy.url().should('not.include', '/movies/1');
  });

  it('should display the correct number of movie cards', () => {
    cy.getMovieCards('have.length', 6);
  });


  it('should display correct movie information on cards', () => {
    cy.stubMoviesApi();

    cy.visit('/movies');
    cy.wait('@getMovies');  

    cy.getMovieCard(0).within(() => {
      cy.getMovieElementbyAriaLabel("movie-title").should('contain', 'A New Hope');
      cy.getMovieElementbyAriaLabel("movie-producer").should('contain', 'Gary Kurtz & Rick McCallum');
      cy.getMovieElementbyAriaLabel("movie-description")
      .invoke('text')
      .then(text => {
        const normalizedText = text.replace(/\s+/g, ' ').trim();
        const expectedDescription = 'It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire\'s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire\'s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....'.replace(/\s+/g, ' ').trim();
        expect(normalizedText).to.equal(expectedDescription);
      });
      cy.getMovieElementbyAriaLabel("view-button").should('be.visible');
    });

    cy.getMovieCard(5).within(() => {
      cy.getMovieElementbyAriaLabel("movie-title").should('contain', 'Revenge of the Sith');
      cy.getMovieElementbyAriaLabel("movie-producer").should('contain', 'Rick McCallum');
      cy.getMovieElementbyAriaLabel("movie-description")
      .invoke('text')
      .then(text => {
        const normalizedText = text.replace(/\s+/g, ' ').trim();
        const expectedDescription = 'War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....'.replace(/\s+/g, ' ').trim();
        expect(normalizedText).to.equal(expectedDescription);
      });
      cy.getMovieElementbyAriaLabel("view-button").should('be.visible');
    });
  });

  it('should navigate to movie details when View Movie button is clicked', () => {
    const movieId = 1;
    const movieIndex = 0;

    cy.stubMoviesApi();

    cy.visit('/movies');
    cy.wait('@getMovies');  

    cy.getMovieCard(movieIndex)
    .should('be.visible')
    .within(() => {
      cy.getMovieElementbyAriaLabel("view-button")
      .should('be.visible')
      .click();
    });
  
    cy.url().should('eq', `${Cypress.config().baseUrl}/movies/${movieId}`);
  });
})
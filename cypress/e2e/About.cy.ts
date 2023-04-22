// https://docs.cypress.io/api/introduction/api.html

describe('About View Test', () => {
  it('visits the app about url', () => {
    cy.visit('/about');
    cy.contains('This is an about page');
  });
});

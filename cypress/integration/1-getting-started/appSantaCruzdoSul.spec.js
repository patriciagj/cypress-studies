/// <reference types="cypress" />

describe('Wikipedia Test', () => {
  it('Visits Wikipedia Website', () => {
    cy.visit('https://en.wikipedia.org/wiki/Main_Page');

    cy.contains('Welcome');

    cy.get('#searchInput')
      .click()
      .type('Santa Cruz do Sul', { force: true })
      .should('have.value', 'Santa Cruz do Sul');

    cy.get('#searchButton').click();

    cy.contains('Município de Santa Cruz do Sul');
  });
});

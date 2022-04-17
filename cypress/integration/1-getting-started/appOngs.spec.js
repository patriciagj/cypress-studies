/// <reference types="cypress"/>

describe('Ongs', () => {
  it('should register an Ong', () => {
    cy.visit('http://localhost:3000/register');
    // cy.get - search for an element
    // .type - insert a text
    cy.get('[placeholder="Nome da ONG"]').type('Pipinhos fofinhos');
    cy.get('[type="email"]').type('dogs@mail.com');
    cy.get('[placeholder="WhatsApp"]').type('51999999999');
    cy.get('[placeholder="Cidade"]').type('Santa Cruz do Sul');
    cy.get('[placeholder="UF"]').type('RS');

    cy.get('.button').click();

    //routing (4 steps)
    // 1. start server with cy.server()
    // 2. create a route with cy.route()
    // 3. assign a route to an alias (it will show in Cypress where was saved)
    // 4. wait with cy.wait() and make a validation

    //cy.route deprecated, using intercept
    cy.intercept('POST', '**/ongs').as('postOng');

    cy.get('[data-cy=submit]').click();

    cy.wait('postOng').then((xhr) => {
      expect(xhr.status).be.eq(200);
      expect(xhr.response.body).has.property('id');
      expect(xhr.response.body.id).is.not.null;
    });
  });

  it.skip('must be able to login in the app', () => {
    cy.visit('http://localhost:3000/');
    cy.get('input').type(Cypress.env('createdOngId'));
    cy.get('.button').click();
  });
});

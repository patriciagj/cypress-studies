/// <reference types="cypress" />

// Setting up base URL
//https://docs.cypress.io/guides/references/configuration#Options

describe('Verify checkboxes via webdriveruni', () => {
  beforeEach(function () {
    cy.visit('/') // Setting up a base Url on cypress.json folder (baseUrl).
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true })
  })
  it('Check and validate checkbox', () => {
    //cy.get('#checkboxes > :nth-child(1) > input').check()
    //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

    cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
    //cy.get('@option-1').check();
    cy.get('@option-1').check().should('be.checked')
  })

  it('Uncheck and validate checkbox', () => {
    cy.get(':nth-child(5) > input').as('option-3')
    cy.get('@option-3').uncheck().should('not.be.checked')
  })

  it('Check mutiple checkboxes', () => {
    cy.get("input[type='checkbox']")
      .check(['option-1', 'option-2', 'option-3', 'option-4'])
      .should('be.checked')
  })
})

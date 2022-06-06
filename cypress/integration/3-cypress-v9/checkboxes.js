/// <reference types="cypress" />

// https://docs.cypress.io/api/commands/check#Syntax

describe('Verify checkboxes via webdriveruni', () => {
  it('Check and validate checkbox', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true })

    //cy.get('#checkboxes > :nth-child(1) > input').check()
    //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

    // Instead of repeating the same code, what we've done is apply the dry concept:
    cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
    //cy.get('@option-1').check();
    cy.get('@option-1').check().should('be.checked')
  })

  it('Uncheck and validate checkbox', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true })

    cy.get(':nth-child(5) > input').as('option-3')
    cy.get('@option-3').uncheck().should('not.be.checked')
  })

  it('Check multiple checkboxes', () => { // How we can check multiple checkboxes using one command.
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true })

    cy.get("input[type='checkbox']")
      .check(['option-1', 'option-2', 'option-3', 'option-4']) // Pass each of the values.
      .should('be.checked')
  })
})


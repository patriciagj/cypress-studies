/// <reference types="cypress" />

describe('Interact with dropdown lists via webdriveruni', () => {
  it('Select specific values via select dropdown lists', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#dropdown-checkboxes-radiobuttons')
      .invoke('removeAttr', 'target')
      .click({ force: true })

    cy.get('#dropdowm-menu-1').select('c#')
    cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng') // select() specifies the value attribute found on the HTML code.
    cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery') // We can also use the text value.

    cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
    cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
  })
})

// We can select items based on its actual value, and we can also select based on the text value.
// And at the same time, we can perform assertions to ensure that we have selected the correct value.

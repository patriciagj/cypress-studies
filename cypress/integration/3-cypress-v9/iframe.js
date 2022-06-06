/// <reference types="cypress" />

// https://docs.cypress.io/guides/guides/web-security#Cross-origin-iframes

// Cypress does not support iframe's and don't think in Selenium mindset when using Cypress to handle iframe's alerts, etc.
// However, what we will be doing is will be looking at a workaround for us to communicate with iframe’s.

describe('Handling IFrame & Modals', () => {
  it('Handle webdriveruni iframe and modal', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true })

    // We will look at a workaround that will enable us to interact with the iFrame:
    cy.get('#frame').then(($iframe) => {
      const body = $iframe.contents().find('body')
      cy.wrap(body).as('iframe')
    })

    cy.get('@iframe').find('#button-find-out-more').click() // The reason why we can use the click command or any Cypress command against our iframe alias is because we wrapped the result.

    cy.get('@iframe').find('#myModal').as('modal')

    cy.get('@modal').should(($expectedText) => {
      const text = $expectedText.text()
      expect(text).to.include(
        'Welcome to webdriveruniversity.com we sell a wide range of electrical goods'
      ) // works with partial text
    })

    cy.get('@modal').contains('Close').click()
  })
})

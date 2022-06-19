/// <reference types="cypress" />

// Using environment variables
// https://docs.cypress.io/guides/guides/environment-variables#Setting

describe('Test Contact Us form via WebdriverUni', () => {
  before(function () {
    cy.fixture('example').then(function (data) {
      //this.data = data;
      globalThis.data = data
    })
  })

  beforeEach(function () {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
  })

  it('Should be able to submit a successful submission via contact us form', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', 'WebDriver | Contact Us')
    cy.url().should('include', 'contactus')
    cy.webdriverUni_ContactForm_Submission(
      Cypress.env('first_name'),
      data.last_name,
      data.email,
      'How can I learn Cypress?',
      'h1',
      'Thank You for your Message!'
    )
  })

  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    cy.webdriverUni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      ' ',
      'How can I learn Cypress?',
      'body',
      'Error: Invalid email address'
    )
  })
})


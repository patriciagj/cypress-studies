/// <reference types="cypress" />

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
    //cy.get('#contact-us').click({force: true})
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('[name="email"]').type(data.email)
    // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
    // cy.get('[type="submit"]').click();
    // cy.get('h1').should('have.text', 'Thank You for your Message!')
    cy.webdriverUni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      data.email,
      'How can I learn Cypress?',
      'h1',
      'Thank You for your Message!'
    )
  })

  it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('textarea.feedback-input').type("How can I learn Cypress?")
    // cy.get('[type="submit"]').click();
    // cy.get('body').contains('Error: all fields are required');
    cy.webdriverUni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      ' ', // In this given test here, we have provided no email address.
      'How can I learn Cypress?',
      'body',
      'Error: Invalid email address'
    )
  })
})

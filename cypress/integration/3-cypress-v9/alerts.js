/// <reference types="cypress" />

// https://docs.cypress.io/api/events/catalog-of-events#Event-Types

// Cypress will automatically handle alerts, is going to automatically handle the JavaScript alerts.
// However, we can still add logic to catch a given alerts or event, so we can catch the alert still.

describe('Handle js alerts', () => {
  it('Confirm js alert contains the correct text', () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true })

    cy.get('#button1').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('I am an alert box!')
    })
  })

  it('Validate js confirm alert box works correctly when clicking ok', () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true })

    cy.get('#button4').click()

    cy.on('window:confirm', (str) => {
      return true
    })
    cy.get('#confirm-alert-text').contains('You pressed OK!')
  })

  it('Validate js confirm alert box works correctly when clicking cancel', () => {
    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true })

    cy.get('#button4').click()

    cy.on('window:confirm', (str) => {
      return false
    })
    cy.get('#confirm-alert-text').contains('You pressed Cancel!')
  })

  it('Validate js confirm alert box using a stub', () => {
    // https://docs.cypress.io/api/commands/stub#Syntax

    //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#popup-alerts')
      .invoke('removeAttr', 'target')
      .click({ force: true })

    const stub = cy.stub() //  We created a stub.
    cy.on('window:confirm', stub) // Then aligned that stub with the event.
    // The stub basically does is like a type of storage where we can see when that event gets fired, the stub is then going to store the result.

    cy.get('#button4')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Press a button!') // Stub will make sure there are JavaScript alert is called with the correct message.
      })
      .then(() => {
        return true // That means that we're going to click on the ok button.
      })
      .then(() => {
        cy.get('#confirm-alert-text').contains('You pressed OK!') // To assess whether the correct message appeared once we clicked Ok.
      })
  })
})

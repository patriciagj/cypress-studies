/// <reference types="cypress" />

// We're going to create multiple tests to simulate different user actions.

// https://docs.cypress.io/api/commands/trigger

describe('Test mouse actions', () => {
  it('Scroll element into view', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#actions')
      .scrollIntoView()
      .invoke('removeAttr', 'target') // This code will click on our intended button within the same browser tab because we've used to remove attribute on the target attribute.
      .click({ force: true })
  })

  it('I should be able to drag and drop a draggable item', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#actions')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true })

    cy.get('#draggable').trigger('mousedown', { which: 1 }) // { which: 1 } = This is going to click in the center of that given element.

    cy.get('#droppable') // We then located the droppable the larger square.
      .trigger('mousemove') // We've moved to the larger square.
      .trigger('mouseup', { force: true }) // I set force to true just to ensure that it does in turn release the mouse actions.
    // And then finally what we did was we triggered the mouseup command. So basically we've released our mouseup button.
  })

  it('I should be able to perform a double mouse click', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#actions')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true })

    cy.get('#double-click').dblclick()
  })

  it('I should be able hold down the left mouse click button on a given element', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#actions')
      .scrollIntoView()
      .invoke('removeAttr', 'target')
      .click({ force: true })

    cy.get('#click-box')
      .trigger('mousedown', { which: 1 })
      .then(($element) => {
        expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
      })
  })
})

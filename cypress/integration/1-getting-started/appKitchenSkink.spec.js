/// <reference types="cypress" />

//We chain together commands to build tests that really express what the app does in a declarative way.

describe('Kitchen Sink Test', () => {
  // Step 1: Visit a page
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io');
  });

  // Step 2: Query for an element
  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type');
    //To find this element by its contents, we'll use cy.contains().
  });

  // Step 3: Click an element
  it('clicks the link "type"', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();
  });

  //Step 4: Make an assertion
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions');
  });
  //Adding more commands and assertions
  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io');

    cy.contains('type').click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions');

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
  });
});

// This is a short test in Cypress that visits a page, finds and clicks a link, verifies the URL and then verifies the behavior of an element on the new page. If we read it out loud, it might sound like:

// 1. Visit: https://example.cypress.io
// 2. Find the element with content: type
// 3. Click on it
// 4. Get the URL
// 5. Assert it includes: /commands/actions
// 6. Get the input with the .action-email class
// 7. Type fake@email.com into the input
// 8. Assert the input reflects the new value

// Or in the Given, When, Then syntax:

// 1. Given a user visits https://example.cypress.io
// 2. When they click the link labeled type
// 3. And they type "fake@email.com" into the .action-email input
// 4. Then the URL should include /commands/actions
// 5. And the .action-email input has "fake@email.com" as its value

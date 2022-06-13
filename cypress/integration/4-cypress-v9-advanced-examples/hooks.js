// https://docs.cypress.io/guides/references/bundled-libraries#Mocha

// https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Test-Structure

// https://mochajs.org/#hooks
// Cypress comes pre-bundled with Mocha.

describe('Hooks', () => { // describe() command to describe its way.
  before(() => {
    cy.log('runs once before all tests in the block')
  })

  after(() => {
    cy.log('runs once after all tests in the block')
  })

  beforeEach(() => {
    cy.log('runs before each test in the block')
  })

  afterEach(() => {
    cy.log('runs after each test in the block')
  })

  it('Example test1', () => { // it() to define an individual test.
    cy.log('Example test1!')
  })

  it('Example test2', () => {
    cy.log('Example test2!')
  })
})

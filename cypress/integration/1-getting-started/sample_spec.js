/// <reference types="cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

// The test below will fail.
// Cypress display the failing test in red since true does not equal false.
describe('My First Failed Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false);
  });
});

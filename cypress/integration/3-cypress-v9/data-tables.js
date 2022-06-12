/// <reference types="Cypress" />

describe('Handling data via webdriveruni', () => {
  beforeEach(() => {
    cy.visit('http://webdriveruniversity.com/')
    cy.get('#data-table').invoke('removeAttr', 'target').click({ force: true })
  })
  it('Calculate and assert the total age of all users', () => {
    let userDetails = []
    let numb = 0
    cy.get('#thumbnail-1 td')
      .each(($el, index, $list) => { // Iterating through each cell within the table.
        userDetails[index] = $el.text() // Then we store its value with an index, within the array. Referencing our element and extracting the text.
      })
      .then(() => {
        let i
        for (i = 0; i < userDetails.length; i++) { // Loop through the entire array.
          if (Number(userDetails[i])) {
            numb += Number(userDetails[i]) // Here is only going to count cells that contain numbers.
          }
          //cy.log(userDetails[i])
        }
        cy.log('Found total age: ' + numb)
        expect(numb).to.eq(322)
      })
  })

  it('Calculate and assert the age of a given user based on last name', () => {
    cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
      const text = $el.text()
      if (text.includes('Woods')) {
        cy.get('#thumbnail-1 tr td:nth-child(2)')
          .eq(index)
          .next() // next() is going to move to the next cell from where Woods is, which is 80.
          .then(function (age) {
            const userAge = age.text()
            expect(userAge).to.equal('80')
          })
      }
    })
  })
})

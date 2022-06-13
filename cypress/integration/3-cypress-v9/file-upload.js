/// <reference types="cypress" />

// https://www.npmjs.com/package/cypress-file-upload

describe('Test File Upload via webdriveruni', () => {
  it('Upload a file....', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })

    cy.fixture('example.png', 'base64').then((fileContent) => {
      cy.get('#myFile').attachFile(
        {
          fileContent,
          fileName: 'example.png', // The file type is the file name laptop.png
          mimeType: 'image/png', // The type of file that we are handling, which is an image and a format is PNG.
        },
        {
          uploadType: 'input',
        }
      )
    })
    cy.get('#submit-button').click()
  })

  it('Upload no file....', () => {
    cy.visit('http://www.webdriveruniversity.com')
    cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true })
    cy.get('#submit-button').click()
  })
})

// Don't forget as well that Cypress automatically handles the alert boxes. And if you look at the command logs, you can see the message: Your file has now been uploaded.

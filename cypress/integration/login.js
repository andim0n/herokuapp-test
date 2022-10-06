/// <reference types="cypress" />
it('login', () => {
  cy.login('tomsmith', 'SuperSecretPassword!')
  cy.get('.example h2').should('contain.text', 'Secure Area')
  cy.get('#flash')
    .should('have.css', 'background-color', 'rgb(93, 164, 35)')
    .should('include.text', 'You logged into a secure area!')
})

it.only('login with invalid credo', () => {
  cy.login('admin', '123')
  cy.get('#flash')
    .should('have.css', 'background-color', 'rgb(198, 15, 19)')
    .should('include.text', 'Your username is invalid!')
})

/// <reference types="cypress" />

it('auth with valid credentials', () => {
  cy.visit('/basic_auth', {
    auth: {
      username: 'admin',
      password: 'admin',
    },
  })
  cy.get('p').should(
    'include.text',
    'Congratulations! You must have the proper credentials'
  )
})
it.only('negative', () => {
  cy.visit('/basic_auth', {
    auth: {
      username: '123',
      password: '123',
    },
    failOnStatusCode: false,
  })
  cy.get('body').should('contain.text', 'Not authorized')
})

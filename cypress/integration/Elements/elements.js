/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const url = 'http://the-internet.herokuapp.com/add_remove_elements/'

Given('Open Add element page', () => {
  cy.visit('http://the-internet.herokuapp.com/add_remove_elements/')
})
When(`I click the "Add element" button`, () => {
  cy.get('[onclick="addElement()"]').click()
})

When(`I click the "Delete" button`, () => {
  cy.get('#elements > :nth-child(1)').click()
})

Then(`I should see "Delete" button`, () => {
  cy.get('#elements > :nth-child(1)').should('be.visible')
})
Then(`I should not see "Delete" button`, () => {
  cy.get('#elements > :nth-child(1)').should('be.visible')
})

When(`I click the "Add element" button {int} times`, (num) => {
  for (let index = 0; index < num; index++) {
    cy.get('[onclick="addElement()"]').click()
  }
})

// Then(/^I should see [0-9] "Delete" buttons$/, (num) => {
Then(`I should see {int} "Delete" buttons`, (num) => {
  cy.get(`#elements > :nth-child(${num})`).should('be.visible')
})

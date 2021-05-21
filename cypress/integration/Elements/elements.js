/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const url = 'http://the-internet.herokuapp.com/add_remove_elements/'

Given('Open Add element page', () => {
  cy.visit('http://the-internet.herokuapp.com/add_remove_elements/')
})
When(`I click the "Add element" button`, () => {})

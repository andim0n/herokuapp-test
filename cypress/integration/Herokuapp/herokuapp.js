/// <reference types="cypress" />

import { Given } from 'cypress-cucumber-preprocessor/steps'

const url = 'http://the-internet.herokuapp.com/'

Given('I open Herokuapp page', () => {
  cy.visit(url)
})

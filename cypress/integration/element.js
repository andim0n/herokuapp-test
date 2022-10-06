/// <reference types="cypress" />

let addNum
let deleteNum

beforeEach(() => {
  cy.visit('/add_remove_elements/')
  addNum = 5
  deleteNum = 2
})

it('Add one element by clicking the button', () => {
  cy.get('[onclick="addElement()"]').click()
  cy.get('#elements > :nth-child(1)').should('be.visible')
})

it(`Add several elements`, () => {
  for (let i = 0; i < addNum; i++) {
    cy.get('[onclick="addElement()"]').click()
    cy.get(`#elements > :nth-child(${i + 1})`).should('be.visible')
  }
  cy.get('#elements').children().should('have.length', addNum)
})

it('Add one element and delete it', () => {
  cy.get('[onclick="addElement()"]').click()
  cy.get('#elements > :nth-child(1)').click()
  cy.get('#elements').should('not.have.descendants')
  //   cy.get('#elements > :nth-child(1)').should('not.exist')
})

it('Add N elements and delete M elements', () => {
  for (let i = 0; i < addNum; i++) {
    cy.get('[onclick="addElement()"]').click()
  }
  for (let i = 0; i < deleteNum; i++) {
    cy.get(`#elements > :nth-child(${deleteNum + 1})`).click()
  }
  cy.get('#elements')
    .children()
    .should('have.length', addNum - deleteNum)
})

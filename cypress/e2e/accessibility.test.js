// <reference types="Cypress" />
describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/')
      .get('main')
      .injectAxe()
  })

  it('Has no detectable accessibility violations on load', () => {
    cy.checkA11y()
  })

  it('checks for accessibility violations on theme toggle', () => {
    cy.get('.theme-controller-wrapper')
      .find('button')
      .click()
      .checkA11y()
  })
})

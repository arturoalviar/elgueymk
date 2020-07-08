// <reference types="Cypress" />

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.featured-header-button').as('textLink')
    cy.get('a')
      .not('.featured-header-button')
      .as('mobileButton')
  })
  it('should be able to route to the keycap-sets page', () => {
    cy.get('@textLink')
      .findByText(/all keycap/i)
      .click()
      .waitForRouteChange()
      .url()
      .should('contain', '/keycap-sets')
  })

  it('should be able to route to the keyboards page', () => {
    cy.get('@textLink')
      .contains('all keyboards')
      .click()
      .waitForRouteChange()
      .url()
      .should('contain', '/keyboards')
  })

  it('should be able to route to keycap-sets page on mobile', () => {
    cy.viewport('iphone-x')
      .get('@mobileButton')
      .contains('all keycap sets')
      .should('exist')
      .click()
      .waitForRouteChange()
      .url()
      .should('contain', '/keycap-sets')
  })

  it('should be able to route to keyboards page on mobile', () => {
    cy.viewport('iphone-x')
      .get('@mobileButton')
      .contains('all keyboards')
      .should('exist')
      .click()
      .waitForRouteChange()
      .url()
      .should('contain', '/keyboards')
  })
})

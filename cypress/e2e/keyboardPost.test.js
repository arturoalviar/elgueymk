// <reference types="Cypress" />

describe('Keyboard Posts', () => {
  beforeEach(() => {
    cy.visit('/keyboards')
  })

  it('goes to a post page and can navigate back to the keyboards page', () => {
    cy.get('.emk-container a')
      .first()
      .click()
      .waitForRouteChange()

    cy.findByText(/back to all keyboards/i)
      .click()
      .waitForRouteChange()
      .url()
      .should('contain', '/keyboards')
  })

  it('goes to a post page and can then go to the next post page', () => {
    return cy
      .get('[class*="GridPage"] a')
      .first()
      .then($link => {
        const $title = $link.find('h2').text()
        cy.wrap($link)
          .click()
          .waitForRouteChange()

        cy.findByText($title).should('exist')

        return cy.get('[aria-label^="next post"]').then($link => {
          const $title = $link.find('h3').text()
          cy.wrap($link)
            .click()
            .waitForRouteChange()

          cy.findByText($title).should('exist')
        })
      })
  })

  it('goes to a post page and can then go to the prev post page', () => {
    return cy
      .get('[class*="GridPage"] a')
      .first()
      .then($link => {
        const $title = $link.find('h2').text()
        cy.wrap($link)
          .click()
          .waitForRouteChange()

        cy.findByText($title).should('exist')

        return cy.get('[aria-label^="previous post"]').then($link => {
          const $title = $link.find('h3').text()
          cy.wrap($link)
            .click()
            .waitForRouteChange()

          cy.findByText($title).should('exist')
        })
      })
  })
})

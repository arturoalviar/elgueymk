// <reference types="Cypress" />

describe('Tags page', () => {
  beforeEach(() => {
    cy.visit('/tags')
  })

  it('has and displays the correct number of posts per tag', () => {
    return cy.get('[class*="TagsGrid"] a').each($item => {
      const $text = $item.text()
      const $url = $item.attr('href')
      const count = parseInt($text.match(/\(([^)]+)\)/)[1])
      expect(count).to.be.a('number')

      cy.visit($url)
        .waitForRouteChange()
        .get('[class*="GridPage"] a')
        .should('have.length', count)
    })
  })
})

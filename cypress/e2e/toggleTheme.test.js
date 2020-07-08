// <reference types="Cypress" />

import { darkThemeColors, lightThemeColors } from '../../src/styles/colors'

describe('Theme toggle', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
  })

  it('should default to a dark theme if there is no localStorage data', () => {
    cy.visit('/')
      .get('body')
      .should('have.backgroundColor', darkThemeColors.bg)
      .should('have.color', darkThemeColors.text)
      .get('main')
      .should('have.backgroundColor', darkThemeColors.bg)
      .should(() => {
        expect(localStorage.getItem('elgueymk-theme-mode')).eq('dark')
      })
  })

  it('should set the theme to light if user prefers light mode', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'matchMedia')
          .withArgs('(prefers-color-scheme: light)')
          .returns({
            media: '(prefers-color-scheme: light)',
            matches: true,
          })
      },
    })
    cy.viewport('iphone-x')
      .get('body')
      .should('have.backgroundColor', lightThemeColors.bg)
      .should('have.color', lightThemeColors.text)
      .get('main')
      .should('have.backgroundColor', lightThemeColors.bg)
      .get('header')
      .should('have.backgroundColor', lightThemeColors.header)
      .should(() => {
        expect(localStorage.getItem('elgueymk-theme-mode')).eq('light')
      })
  })

  it('should toggle the theme and update local storage', () => {
    cy.visit('/')
      .get('[data-testid=theme-toggle-btn]')
      .click()
      .should(() => {
        expect(localStorage.getItem('elgueymk-theme-mode')).eq('light')
      })
      .click()
      .should(() => {
        expect(localStorage.getItem('elgueymk-theme-mode')).eq('dark')
      })
  })
})

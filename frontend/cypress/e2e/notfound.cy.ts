import { email, password } from '../fixtures/example.json'

describe('Notfound Page', () => {
  it('Dashboard', () => {
    cy.visit('/')
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.url().should('include', 'dashboard')
  })

  it('Must have a message from the page not found.', () => {
    cy.visit('/404')
    cy.get('h3').contains('Oops, A página que você está procurando não está aqui!').should('be.visible')
  })
})

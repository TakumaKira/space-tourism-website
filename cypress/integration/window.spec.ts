import { title } from '../../config.json'

context('Window', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })

  it('cy.title() - get the title', () => {
    cy.title().should('eq', title)
  })
})
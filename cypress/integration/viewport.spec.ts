context('Viewport', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/')
  })
  it('cy.viewport() - set the viewport size and dimension', () => {
    cy.viewport(1440, 900)
    cy.wait(1000)
    cy.viewport(768, 1024)
    cy.wait(1000)
    cy.viewport(375, 667)
  })
})
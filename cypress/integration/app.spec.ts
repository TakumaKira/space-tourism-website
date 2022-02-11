describe('App', () => {
  it('should navigate to the top page, then destination/moon', () => {
    // Start from the index page
    cy.visit('http://localhost:3001/')
    cy.contains('EXPLORE').parent().click()
    cy.location('pathname').should('eq', '/destination/moon')
  })
})
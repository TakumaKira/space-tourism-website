describe('App', () => {
  it('should navigate to the top page, then destination/moon', () => {
    // Start from the index page
    cy.visit('http://localhost:3001/')
    cy.contains('EXPLORE').parent().click()
    cy.location('pathname').should('eq', '/destination/moon')
  })

  it('should display not found message if got 404', () => {
    cy.visit({url: 'http://localhost:3001/test', failOnStatusCode: false})
    cy.contains('404 - Page Not Found')

    cy.visit({url: 'http://localhost:3001/destination/test', failOnStatusCode: false})
    cy.contains('404 - Destination Not Found')

    cy.visit({url: 'http://localhost:3001/crew/test', failOnStatusCode: false})
    cy.contains('404 - Crew Not Found')

    cy.visit({url: 'http://localhost:3001/technology/test', failOnStatusCode: false})
    cy.contains('404 - Technology Not Found')
  })
})
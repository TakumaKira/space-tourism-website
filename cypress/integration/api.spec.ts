import { data } from '../../pages/api/data'

context('API', () => {
  it('cy.request() - make an XHR request', () => {
    // destination
    cy.request('http://localhost:3001/api/destination')
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.have.property('length').and.be.eq(Object.values(data.destination).length)
        expect(response.body).to.deep.equal(Object.values(data.destination))
      })
    // destination/moon
    cy.request('http://localhost:3001/api/destination/moon')
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.deep.equal(data.destination.moon)
      })
    // destination/mars
    cy.request('http://localhost:3001/api/destination/mars')
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.deep.equal(data.destination.mars)
      })
    // destination/europa
    cy.request('http://localhost:3001/api/destination/europa')
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.deep.equal(data.destination.europa)
      })
    // destination/titan
    cy.request('http://localhost:3001/api/destination/titan')
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.deep.equal(data.destination.titan)
      })

    // crew
    cy.request('http://localhost:3001/api/crew')
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.have.property('length').and.be.eq(Object.values(data.crew).length)
        expect(response.body).to.deep.equal(Object.values(data.crew))
      })
    // crew/DouglasHurley
    cy.request('http://localhost:3001/api/crew/DouglasHurley')
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.deep.equal(data.crew.DouglasHurley)
      })
    // crew/MarkShuttleworth
    cy.request('http://localhost:3001/api/crew/MarkShuttleworth')
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.deep.equal(data.crew.MarkShuttleworth)
      })
    // crew/VictorGlover
    cy.request('http://localhost:3001/api/crew/VictorGlover')
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.deep.equal(data.crew.VictorGlover)
      })
    // crew/AnoushehAnsari
    cy.request('http://localhost:3001/api/crew/AnoushehAnsari')
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.deep.equal(data.crew.AnoushehAnsari)
      })

    // technology
    cy.request('http://localhost:3001/api/technology')
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.have.property('length').and.be.eq(Object.values(data.technology).length)
        expect(response.body).to.deep.equal(Object.values(data.technology))
      })
    // technology/launchVehicle
    cy.request('http://localhost:3001/api/technology/launchVehicle')
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.deep.equal(data.technology.launchVehicle)
      })
    // technology/spaceport
    cy.request('http://localhost:3001/api/technology/spaceport')
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.deep.equal(data.technology.spaceport)
      })
    // technology/spaceCapsule
    cy.request('http://localhost:3001/api/technology/spaceCapsule')
      .should(response => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response.body).to.deep.equal(data.technology.spaceCapsule)
      })

    // 404
    cy.request({url: 'http://localhost:3001/api/destinations', failOnStatusCode: false})
      .should(response => {
        expect(response.status).to.eq(404)
        expect(response).to.have.property('headers')
      })
  })
})
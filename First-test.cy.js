/// <reference types="cypress" />



it("Questions No 1 To 3", () => {
    cy.visit("https://example.cypress.io/")
    cy.get('h1').contains("Kitchen Sink")
    cy.contains('type').click()
    cy.url().should('include', '/commands/action')
    cy.get('*[class^="form-control action-email"]').type('siamakeskandarzad@gmail.com')
    cy.get('input').invoke('val').should('not.be.empty')
})

it("Questions No 5", () => {
    cy.request('post', 'https://jsonplaceholder.typicode.com/todos', { "title": "foo", "body": "bar", "bar": "1" })
        .its('status')
        .should('eq', 201)

})

it("Questions No 4", () => {

    cy.request('GET', 'https://jsonplaceholder.typicode.com/todos').as('lord')
        .its('body')
        .should(expect('@lord').to.be.not.null)

})


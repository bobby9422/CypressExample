const { should } = require("chai")

describe('Web tests', function () {

    it('Test1: Basic Auth (user and pass: admin)', function () {
        cy.visit('http://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('h3').should('have.text', 'Basic Auth')
        cy.get('p').should('have.text', '\n    Congratulations! You must have the proper credentials.\n  ')
    })

    it('Test1: Add/Remove Elements', function () {
        cy.visit('http://the-internet.herokuapp.com/add_remove_elements/')
        cy.get('div[class=example] button').should('have.text','Add Element').click();
        cy.get('div[id=elements] button').should('have.text','Delete').click();

    })
})
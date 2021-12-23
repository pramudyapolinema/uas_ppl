// logout.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Login', () => {
    it('Visit Login page', () => {
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
        cy.get('[name="username"]').type('erika')
        cy.get('[name="password"]').type('')
        cy.get('#login > fieldset > div.buttons > button').click()
    })
})

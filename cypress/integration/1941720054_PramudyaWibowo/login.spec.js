describe('Login Test JIP', () => {
    it('Visit login page and test with standard user', () => {
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
        cy.get('#username').type('${{secrets.USERNAME}}').should('have.value', '${{secrets.USERNAME}}')
        cy.get('#password').type('${{secrets.PASSWORD}}').should('have.value', '${{secrets.PASSWORD}}')
        cy.get('#login > fieldset > div.buttons > button').click()
        cy.url().should('include', '/index')
        cy.get('#navigationUser > li:nth-child(1) > a').contains('Logout')
    });
});
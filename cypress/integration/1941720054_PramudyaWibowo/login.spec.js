describe('Test to make submission', () => {
    it('Visit login page and test with standard user', () => {
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
        cy.get('#username').type('pramudyapolinema').should('have.value', 'pramudyapolinema')
        cy.get('#password').type('pram240101').should('have.value', 'pram240101')
        cy.get('#login > fieldset > div.buttons > button').click()
        cy.url().should('include', '/index')
        cy.get('#navigationUser > li:nth-child(1) > a').contains('Logout')
    });

    it('Login user and test redirect to template page', () => {
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
        cy.get('#username').type('pramudyapolinema').should('have.value', 'pramudyapolinema')
        cy.get('#password').type('pram240101').should('have.value', 'pram240101')
        cy.get('#login > fieldset > div.buttons > button').click()
        cy.url().should('include', '/index')
        cy.get('#navigationUser > li:nth-child(1) > a').contains('Logout')
        cy.get('#navigationPrimary > li:nth-child(5) > a').click()
        cy.url().should('eq', 'https://drive.google.com/file/d/1d1LcKfEgGsP3iCXLQ07iBdTX06krMnak/view')
    });
});
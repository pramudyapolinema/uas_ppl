it('Login Test Normal', () => {
    it('Should be Can Login', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('risang22')
    cy.get('#password').type('Daniswara123')
    cy.get('#submit').click()

    //cy.get('#react-burger-menu-btn').click()
    //cy.get('#logout_sidebar_link').click()
    })
})
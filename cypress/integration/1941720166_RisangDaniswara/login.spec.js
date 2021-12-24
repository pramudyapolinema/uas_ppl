describe('Test to make submission', () => {
    it('Login Test Berhasil', () => {
       
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
        cy.get('#username').type('risang22')
        cy.get('#password').type('Daniswara123')
        cy.get('#login > fieldset > div.buttons > button').click()
        cy.get('#navigationUser > li:nth-child(1) > a').contains('Logout')
        
    })

    it('Login Test Password Salah', () => {
        
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
        cy.get('#username').type('risang22')
        cy.get('#password').type('aniswara123')
        cy.get('#login > fieldset > div.buttons > button').click()

        
    })

    it('Login Test Username Salah', () => {
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
        cy.get('#username').type('isang22')
        cy.get('#password').type('Daniswara123')
        cy.get('#login > fieldset > div.buttons > button').click()
        
    })
    
    it('Login Test Username Kosong', () => {
        
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
        cy.get('#username').type(' ')
        cy.get('#password').type('Daniswara123')
        cy.get('#login > fieldset > div.buttons > button').click()

        
    })

    it('Login Test Password Kosong', () => {
        
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
        cy.get('#username').type('risang22')
        cy.get('#password').type(' ')
        cy.get('#login > fieldset > div.buttons > button').click()

        
    })

    it('Login Test Username dan Password Kosong', () => {
        
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
        cy.get('#username').type(' ')
        cy.get('#password').type(' ')
        cy.get('#login > fieldset > div.buttons > button').click()

        
    })
})
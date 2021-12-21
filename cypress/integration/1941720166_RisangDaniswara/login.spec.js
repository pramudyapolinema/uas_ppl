it('Login Test Berhasil', () => {
    it('Should be Can Login', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('risang22')
    cy.get('#password').type('Daniswara123')
    cy.get('#submit').click()
    cy.get('#navigationUser > li:nth-child(1) > a').contains('Logout')
    })
})

it('Login Test Password Salah', () => {
    it('Password Salah', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('risang22')
    cy.get('#password').type('aniswara123')
    cy.get('#submit').click()

    cy.get('#navigationUser > li:nth-child(1) > a').contains('Logout')
    })
})

it('Login Test Username Salah', () => {
    it('Username Salah', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('isang22')
    cy.get('#password').type('Daniswara123')
    cy.get('#submit').click()

    cy.get('#navigationUser > li:nth-child(1) > a').contains('Logout')
    })
})

it('Login Test Username Kosong', () => {
    it('Username Kosong', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('')
    cy.get('#password').type('Daniswara123')
    cy.get('#submit').click()

    cy.get('#navigationUser > li:nth-child(1) > a').contains('Logout')
    })
})

it('Login Test Password Kosong', () => {
    it('Password kosong', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('risang22')
    cy.get('#password').type('')
    cy.get('#submit').click()

    cy.get('#navigationUser > li:nth-child(1) > a').contains('Logout')
    })
})

it('Login Test Username dan Password Kosong', () => {
    it('USername dan Password Kosong', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('')
    cy.get('#password').type('')
    cy.get('#submit').click()

    cy.get('#navigationUser > li:nth-child(1) > a').contains('Logout')
    })
})
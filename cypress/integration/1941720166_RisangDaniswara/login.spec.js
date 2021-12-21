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

it('Login Test Normal', () => {
    it('Password Salah', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('risang22')
    cy.get('#password').type('aniswara123')
    cy.get('#submit').click()

    //cy.get('#react-burger-menu-btn').click()
    //cy.get('#logout_sidebar_link').click()
    })
})

it('Login Test Normal', () => {
    it('Username Salah', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('isang22')
    cy.get('#password').type('Daniswara123')
    cy.get('#submit').click()

    //cy.get('#react-burger-menu-btn').click()
    //cy.get('#logout_sidebar_link').click()
    })
})

it('Login Test Normal', () => {
    it('Username Kosong', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('')
    cy.get('#password').type('Daniswara123')
    cy.get('#submit').click()

    //cy.get('#react-burger-menu-btn').click()
    //cy.get('#logout_sidebar_link').click()
    })
})

it('Login Test Normal', () => {
    it('Password kosong', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('risang22')
    cy.get('#password').type('')
    cy.get('#submit').click()

    //cy.get('#react-burger-menu-btn').click()
    //cy.get('#logout_sidebar_link').click()
    })
})

it('Login Test Normal', () => {
    it('USername dan Password Kosong', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('')
    cy.get('#password').type('')
    cy.get('#submit').click()

    //cy.get('#react-burger-menu-btn').click()
    //cy.get('#logout_sidebar_link').click()
    })
})
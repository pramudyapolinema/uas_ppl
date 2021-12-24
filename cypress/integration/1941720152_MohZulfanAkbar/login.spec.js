it('Login Test Normal', () => {
    it('Should be Can Login', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('ImmanuelZulfanSean')
    cy.get('#password').type('sean123')
    cy.get('#submit').click()
    cy.get('#navigationUser > li:nth-child(1) > a').contains('Logout')
    })
})

it('Login Test Normal', () => {
    it('Password Salah', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('ImmanuelZulfanSean')
    cy.get('#password').type('ean123')
    cy.get('#submit').click()

    //cy.get('#react-burger-menu-btn').click()
    //cy.get('#logout_sidebar_link').click()
    })
})

it('Login Test Normal', () => {
    it('Username Salah', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('ImmanuelSeanZulfan')
    cy.get('#password').type('sean123')
    cy.get('#submit').click()

    //cy.get('#react-burger-menu-btn').click()
    //cy.get('#logout_sidebar_link').click()
    })
})

it('Login Test Normal', () => {
    it('Username Kosong', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('')
    cy.get('#password').type('sean123')
    cy.get('#submit').click()

    //cy.get('#react-burger-menu-btn').click()
    //cy.get('#logout_sidebar_link').click()
    })
})

it('Login Test Normal', () => {
    it('Password kosong', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('ImmanuelZulfanSean')
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
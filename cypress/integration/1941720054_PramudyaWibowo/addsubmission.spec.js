describe('Test to make submission', () => {
    it('Visit login page and test with standard user', () => {
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
        cy.get('#username').type('pramudyapolinema').should('have.value', 'pramudyapolinema')
        cy.get('#password').type('pram240101').should('have.value', 'pram240101')
        cy.get('#login > fieldset > div.buttons > button').click()
        cy.url().should('include', '/submissions')
        cy.get('#navigationUser > li.user > a').contains('pramudyapolinema')
    });

    it('Login user and test redirect to template page', () => {
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
        cy.get('#username').type('pramudyapolinema').should('have.value', 'pramudyapolinema')
        cy.get('#password').type('pram240101').should('have.value', 'pram240101')
        cy.get('#login > fieldset > div.buttons > button').click()
        cy.url().should('include', '/submissions')
        cy.get('#navigationUser > li.user > a').contains('pramudyapolinema')
        cy.get('#navigationUser > li.view_frontend > a').click()
        cy.get('#navigationPrimary > li:nth-child(5) > a').click()
        cy.url().should('eq', 'https://drive.google.com/file/d/1d1LcKfEgGsP3iCXLQ07iBdTX06krMnak/view')
    });

    it('Login user and test to make a new submission at step 1', () => {
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
        cy.get('#username').type('pramudyapolinema').should('have.value', 'pramudyapolinema')
        cy.get('#password').type('pram240101').should('have.value', 'pram240101')
        cy.get('#login > fieldset > div.buttons > button').click()
        cy.url().should('include', '/submissions')
        cy.get('#navigationUser > li.user > a').contains('pramudyapolinema')
        cy.get('#myQueue > div > div > div.pkpListPanel__header.-pkpClearfix > ul > li > a').click()
        cy.get('#locale').select('id_ID')
        cy.get('#locale').should('have.value', 'id_ID')
        cy.get('#checklist-5').click()
        cy.get('#checklist-0').click()
        cy.get('#checklist-1').click()
        cy.get('#checklist-4').click()
        cy.get('#copyrightNoticeAgree').click()
        cy.get('#privacyConsent').click()
        cy.get('#submitStep1Form').submit()
        cy.url().should('contain', '#step-2')
    });

    it('Continue make submission at step 2', () => {
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
        cy.get('#username').type('pramudyapolinema').should('have.value', 'pramudyapolinema')
        cy.get('#password').type('pram240101').should('have.value', 'pram240101')
        cy.get('#login > fieldset > div.buttons > button').click()
        cy.url().should('include', '/submissions')
        cy.get('#navigationUser > li.user > a').contains('pramudyapolinema')
        cy.get('#myQueue > div > div > div.pkpListPanel__body.-pkpClearfix.pkpListPanel__body--submissions > div > ul > li > div.pkpListPanelItem__summary.-pkpClearfix > button').click({ multiple: true })
        cy.get('#myQueue > div > div > div.pkpListPanel__body.-pkpClearfix.pkpListPanel__body--submissions > div > ul > li > div.pkpListPanelItem__details.pkpListPanelItem__details--submission > div > a').click({ multiple:true})
        cy.get('#genreId').select('1')
        cy.get('input[type=file]').attachFile('example.pdf');
        cy.get('#continueButton').click()
        cy.get('#continueButton').click()
        cy.get('#continueButton').click()
        cy.get('*[class^="pkp_controllers_linkAction pkp_linkaction_downloadFile pkp_linkaction_icon_pdf"]').should('contain', 'example.pdf')
    });
});
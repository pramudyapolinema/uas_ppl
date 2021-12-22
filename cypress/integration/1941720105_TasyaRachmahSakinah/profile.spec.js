describe('Profile', () => {
    it('Profile Scenario - Valid', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
    cy.get('#username').type('tasya')
    cy.get('#password').type('tasya300602')
    cy.get('#login > fieldset > div.buttons > button').click()

    //asertion
    cy.title().should('include', 'Submissions')
    cy.get('.fa-user').click()
    cy.contains('View Profile').click()
    cy.contains('Password').click()
    cy.get('input[name=oldPassword]').type('tasya300602')
    cy.get('input[name=password]').type('tasya300603')
    cy.get('input[name=password2]').type('tasya300603')
    cy.get('.submitFormButton').click()
    })
})
// describe('Profile', () => {
//     it('Profile Scenario - Invalid OldPassword', () => {
//     cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
//     cy.get('#username').type('tasya')
//     cy.get('#password').type('tasya300602')
//     cy.get('#login > fieldset > div.buttons > button').click()

//     //asertion
//     cy.title().should('include', 'Submissions')
//     cy.get('.fa-user').click()
//     cy.contains('View Profile').click()
//     cy.contains('Password').click()
//     cy.get('input[name=oldPassword]').type('tasya300601')
//     cy.get('input[name=password]').type('tasya300603')
//     cy.get('input[name=password2]').type('tasya300603')
//     cy.get('.submitFormButton').click()
//     })
// })
// describe('Profile', () => {
//     it('Profile Scenario - Invalid PassBaru', () => {
//     cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
//     cy.get('#username').type('tasya')
//     cy.get('#password').type('tasya300602')
//     cy.get('#login > fieldset > div.buttons > button').click()

//     //asertion
//     cy.title().should('include', 'Submissions')
//     cy.get('.fa-user').click()
//     cy.contains('View Profile').click()
//     cy.contains('Password').click()
//     cy.get('input[name=oldPassword]').type('tasya300602')
//     cy.get('input[name=password]').type('tasya300604')
//     cy.get('input[name=password2]').type('tasya300603')
//     cy.get('.submitFormButton').click()
//     })
// })
// describe('Profile', () => {
//     it('Profile Scenario - Invalid PassBaru2', () => {
//     cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
//     cy.get('#username').type('tasya')
//     cy.get('#password').type('tasya300602')
//     cy.get('#login > fieldset > div.buttons > button').click()

//     //asertion
//     cy.title().should('include', 'Submissions')
//     cy.get('.fa-user').click()
//     cy.contains('View Profile').click()
//     cy.contains('Password').click()
//     cy.get('input[name=oldPassword]').type('tasya300602')
//     cy.get('input[name=password]').type('tasya300603')
//     cy.get('input[name=password2]').type('tasya300604')
//     cy.get('.submitFormButton').click()
//     })
// })
// describe('Profile', () => {
//     it('Profile Scenario - Invalid PassBaru & PassBaru2', () => {
//     cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/login')
//     cy.get('#username').type('tasya')
//     cy.get('#password').type('tasya300602')
//     cy.get('#login > fieldset > div.buttons > button').click()

//     //asertion
//     cy.title().should('include', 'Submissions')
//     cy.get('.fa-user').click()
//     cy.contains('View Profile').click()
//     cy.contains('Password').click()
//     cy.get('input[name=oldPassword]').type('tasya300602')
//     cy.get('input[name=password]').type('')
//     cy.get('input[name=password2]').type('')
//     cy.get('.submitFormButton').click()
//     })
// })
// register.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Register akun', () => {
    it('Visit register page', () => {
        cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/user/register')
        cy.get('input[name="givenName"]').type('Erika')
        cy.get('input[name="familyName"]').type('Amalia')
        cy.get('input[name="affiliation"]').type('mahasiswi')
        cy.get('select').select('Indonesia').should('have.value', 'ID')
        cy.get('input[name="email"]').type('')
        cy.get('input[name="username"]').type('erika')
        cy.get('input[name="password"]').type('')
        cy.get('input[name="password2"]').type('')
        cy.get('[type="checkbox"]').check()
        Cypress.Commands.add('confirmCaptcha', function () {
            cy.get('iframe')
              .first()
              .then((recaptchaIframe) => {
                const body = recaptchaIframe.contents()
                cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
              })
          })
          cy.get('#register').click()
    })
it('Data sama', () => {
    cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/user/register')
    cy.get('input[name="givenName"]').type('Erika')
    cy.get('input[name="familyName"]').type('Amalia')
    cy.get('input[name="affiliation"]').type('mahasiswi')
    cy.get('select').select('Indonesia').should('have.value', 'ID')
    cy.get('input[name="email"]').type('')
    cy.get('input[name="username"]').type('erika')
    cy.get('input[name="password"]').type('')
    cy.get('input[name="password2"]').type('')
    cy.get('[type="checkbox"]').check()
    Cypress.Commands.add('confirmCaptcha', function () {
        cy.get('iframe')
          .first()
          .then((recaptchaIframe) => {
            const body = recaptchaIframe.contents()
            cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
          })
      })
      cy.get('#register').click()
})
it('Konfirmasi password salah', () => {
  cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/user/register')
  cy.get('input[name="givenName"]').type('Erika')
  cy.get('input[name="familyName"]').type('Amalia')
  cy.get('input[name="affiliation"]').type('mahasiswi')
  cy.get('select').select('Indonesia').should('have.value', 'ID')
  cy.get('input[name="email"]').type('')
  cy.get('input[name="username"]').type('erika')
  cy.get('input[name="password"]').type('')
  cy.get('input[name="password2"]').type('')
  cy.get('[type="checkbox"]').check()
  Cypress.Commands.add('confirmCaptcha', function () {
      cy.get('iframe')
        .first()
        .then((recaptchaIframe) => {
          const body = recaptchaIframe.contents()
          cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
        })
    })
    cy.get('#register').click()
})
it('Tidak melakukan checklist', () => {
  cy.visit('http://jip.polinema.ac.id/ojs3/index.php/jip/user/register')
  cy.get('input[name="givenName"]').type('Erika')
  cy.get('input[name="familyName"]').type('Amalia')
  cy.get('input[name="affiliation"]').type('mahasiswi')
  cy.get('select').select('Indonesia').should('have.value', 'ID')
  cy.get('input[name="email"]').type('')
  cy.get('input[name="username"]').type('erika')
  cy.get('input[name="password"]').type('')
  cy.get('input[name="password2"]').type('')
  cy.get('#register').click()
  })
})

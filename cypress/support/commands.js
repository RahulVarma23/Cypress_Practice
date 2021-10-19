// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login',(username,password)=>{
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('a[href="/account/login?ret=/"]').should('be.visible').click()
    cy.get('input[class="_2IX_2- VJZDxU"]').should('be.visible').should('be.enabled').type(username)
    cy.get('input[type="password"]').should('be.visible').should('be.enabled').type(password)
    cy.wait(2000)
    cy.get('button[type=submit]>span').should('be.visible').click()
})
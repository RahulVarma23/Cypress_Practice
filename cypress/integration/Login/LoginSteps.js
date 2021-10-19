import {should} from "chai";
//import {Given,When,And,Then}  from "cypress-cucumber-preprocessor";

Given('I open the application',()=>{
    cy.visit(Cypress.env('login_url'))
})

When ('I login application using username as {} and password as {}',(username,password)=>{
    cy.login(username,password)
})

Then('I am on home page',()=>{
    cy.contains('My Account').should('exist')
})

Then('I logout from application',()=>{
    cy.contains('My Account').trigger('mouseover')
    cy.contains('Logout').click()
    cy.contains('My Account').should('not.exist')
    cy.contains('Login').should('exist')
})
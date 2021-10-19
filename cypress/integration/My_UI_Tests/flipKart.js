import {should} from "chai";

describe('flipkart app suite', () => {
    it('login test', () => {
      cy.visit('https://www.flipkart.com/')
      //cy.get('a[href*="helpcentre?otracker=undefined_footer_navlinks"]').scrollIntoView().should('be.visible')
      cy.contains('Sitemap').scrollIntoView().should('be.visible').should('have.class','_1arVWX')

      //login 
      cy.get('a[href="/account/login?ret=/"]').should('be.visible').click()
      cy.get('input[class="_2IX_2- VJZDxU"]').should('be.visible').should('be.enabled').type('9146130133')
      cy.get('input[type="password"]').should('be.visible').should('be.enabled').type('dkjnjdn')
      cy.get('button[type=submit]>span').should('be.visible').click()
      
      //home page verification
      cy.contains('My Account').should('exist')

      //verify products
      cy.get('.xtXmba').should('have.length',9)

      //logout 
      cy.contains('My Account').trigger('mouseover')
      cy.contains('Logout').click()

      //verify login page
      cy.contains('My Account').should('not.exist')
      cy.contains('Login').should('exist')
      cy.log("logout successfully")
    })
  })
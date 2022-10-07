/// <reference types="Cypress" />

import AccountCreatePage from '../../../support/pages/AccountCreatePage'

const register = new AccountCreatePage()

describe('Verify Login functionality', () => {
  it.only('should register account with valid credentials', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/create')
    cy.url().should(
      'eq',
      'https://automationteststore.com/index.php?rt=account/create'
    )
    cy.title().should('eq', 'Create Account')

    register
      .loginPageLink()
      .should('be.visible')
      .and(
        'have.text',
        'If you already have an account with us, please login at the login page.'
      )
    register
      .createAccountTxt()
      .should('have.text', ' Create Account')
      .and('be.visible')
    //Your Personal Details//
    register
      .yourPersonalDetailsTxt()
      .should('have.text', 'Your Personal Details')
      .and('be.visible')
      .then(personalDetails => {
        cy.log('Text = >> ' + personalDetails.text())

        cy.get('.col-xs-12').then(regForm => {
          cy.wrap(regForm)
            .find('h1')
            .should('contain.text', 'Create Account'.trim())
          cy.wrap(regForm)
            .find('p')
            .should(
              'contain.text',
              'If you already have an account with us, please login at the login page.'
            )

          cy.wrap(regForm)
            .find('h4')
            .should('contain.text', 'Your Personal Details')

          cy.wrap(regForm).find('label').should('contain.text', 'First Name:')
          cy.wrap(regForm).find('label').should('contain.text', 'Last Name:')
          cy.wrap(regForm).find('label').should('contain.text', 'E-Mail:')
          cy.wrap(regForm).find('label').should('contain.text', 'Telephone:')
          cy.wrap(regForm).find('label').should('contain.text', 'Fax:')

          cy.wrap(regForm).find('h4').should('contain.text', 'Your Address')

          cy.wrap(regForm).find('label').should('contain.text', 'Company:')
          cy.wrap(regForm).find('label').should('contain.text', 'Address 1:')
          cy.wrap(regForm).find('label').should('contain.text', 'Address 2:')
          cy.wrap(regForm).find('label').should('contain.text', 'City:')
          cy.wrap(regForm)
            .find('label')
            .should('contain.text', 'Region / State:')
          cy.wrap(regForm).find('label').should('contain.text', 'ZIP Code:')
          cy.wrap(regForm).find('label').should('contain.text', 'Country:')

          cy.wrap(regForm).find('h4').should('contain.text', 'Login Details')

          cy.wrap(regForm).find('label').should('contain.text', 'Login name:')
          cy.wrap(regForm).find('label').should('contain.text', 'Password:')
          cy.wrap(regForm)
            .find('label')
            .should('contain.text', 'Password Confirm:')

          cy.wrap(regForm).find('h4').should('contain.text', 'Newsletter')

          cy.wrap(regForm).find('label').should('contain.text', 'Subscribe:')
          cy.wrap(regForm).find('label').should('contain.text', 'Yes')
          cy.wrap(regForm).find('label').should('contain.text', 'No')
          cy.wrap(regForm)
            .find('label')
            .should('contain.text', 'I have read and agree to the')

          cy.wrap(regForm).find('button').should('contain.text', 'Continue')
        })
      })
  })
})

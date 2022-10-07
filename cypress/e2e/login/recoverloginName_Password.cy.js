/// <reference types="Cypress" />

import TopNavPage from '../support/pages/TopNavPage'
import AccountLoginPage from '../support/pages/AccountLoginPage'
import AccountPage from '../support/pages/AccountPage'
import AccountEditPage from '../support/pages/AccountEditPage'
import AccountLogoutPage from '../support/pages/AccountLogoutPage'
import IndexPage from '../support/pages/IndexPage'

const indexPage = new IndexPage()
const topNavPage = new TopNavPage()
const accountLoginPage = new AccountLoginPage()
const accountPage = new AccountPage()
const accountEditPage = new AccountEditPage()
const accountLogoutPage = new AccountLogoutPage()

describe('Verify Login functionality', () => {
  before(function () {
    cy.fixture('userLogin').then(function (data) {
      globalThis.data = data
    })
  })
  beforeEach('should navigate from Home to Login Page', () => {
    cy.visit('')
    cy.document().its('contentType').should('eq', 'text/html')
    cy.url().should('eq', 'https://automationteststore.com/')
    cy.title().should('eq', 'A place to practice your automation skills!')
    topNavPage.logoImage().should('be.visible')
    topNavPage
      .loginOrRegisterLink()
      .should('be.visible')
      .click()
      .then(function (linkText) {
        cy.log('Clicked on Login or Register button >> ' + linkText.text())
      })
    cy.url().should(
      'eq',
      'https://automationteststore.com/index.php?rt=account/login'
    )
    cy.title().should('eq', 'Account Login')

    accountLoginPage
      .accountLoginTxt()
      .should('be.visible')
      .contains('Account Login')
      .then(function (accLogin) {
        cy.log('Heading text >> ' + accLogin.text())
      })

    accountLoginPage
      .returningCustomerTxt()
      .should('be.visible')
      .contains('Returning Customer')
    accountLoginPage
      .iAmANewCustomerText()
      .should('be.visible')
      .contains('I am a returning customer.')
    accountLoginPage
      .forgotYourLoginLink()
      .should('be.visible')
      .contains('Forgot your login?')
    accountLoginPage
      .forgotYourPasswordLink()
      .should('be.visible')
      .and('contain', 'Forgot your password?')
    accountLoginPage.loginBlueMenu().should('be.visible')
    accountLoginPage.checkoutOptions().should('be.visible')
    accountLoginPage.registerAccountRadioBtn().should('be.visible')
    accountLoginPage
      .createAnAccountTxt()
      .should('be.visible')
      .and('contain', 'By creating an account you will be able to shop faster')
    accountLoginPage.continueBtn().should('be.visible')
  })

  it.only('should not login with invalid credentials => login name', () => {

    cy.loginToApplication(data.wrongLoginName, data.password)

    cy.title().should('eq', 'Account Login')
    accountLoginPage
      .dangerAlertErrorLoginMessage()
      .contains('Error: Incorrect login or password provided')
      .should('be.visible')
  })
  it.only('should not login with invalid credentials => password', () => {

    cy.loginToApplication(data.loginName, data.wrongPassword)

    cy.title().should('eq', 'Account Login')
    accountLoginPage
      .dangerAlertErrorLoginMessage()
      .contains('Error: Incorrect login or password provided')
      .should('be.visible')
  })
 
})

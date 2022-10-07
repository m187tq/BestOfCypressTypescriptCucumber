/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import TopNavPage from '../../../support/pages/TopNavPage'
import AccountLoginPage from '../../../support/pages/AccountLoginPage'
import AccountPage from '../../../support/pages/AccountPage'
import AccountEditPage from '../../../support/pages/AccountEditPage'
import AccountLogoutPage from '../../../support/pages/AccountLogoutPage'

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
    cy.visit('https://automationteststore.com/')
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
    cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/login')
    cy.title().should('eq', 'Account Login')

    accountLoginPage
      .accountLoginTxt()
      .should('be.visible')
      //.should('have.length', 1)
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

  it('should not login with invalid credentials => blanks', () => {
    accountLoginPage.loginBtn().should('be.visible').click()
    cy.title().should('eq', 'Account Login')
    accountLoginPage
      .dangerAlertErrorLoginMessage()
      .contains('Error: Incorrect login or password provided')
      .should('be.visible')
  })

  it('should not login with invalid credentials => login name', () => {
    cy.loginToApplication(data.wrongLoginName, data.password)

    cy.title().should('eq', 'Account Login')
    accountLoginPage
      .dangerAlertErrorLoginMessage()
      .contains('Error: Incorrect login or password provided')
      .should('be.visible')
  })

  it('should not login with invalid credentials => password', () => {
    cy.loginToApplication(data.loginName, data.wrongPassword)

    cy.title().should('eq', 'Account Login')
    accountLoginPage
      .dangerAlertErrorLoginMessage()
      .contains('Error: Incorrect login or password provided')
      .should('be.visible')
  })

  it('should not login with invalid credentials => login Name & password', () => {
    cy.loginToApplication(data.wrongLoginName, data.wrongPassword)

    cy.title().should('eq', 'Account Login')
    accountLoginPage
      .dangerAlertErrorLoginMessage()
      .contains('Error: Incorrect login or password provided')
      .should('be.visible')
  })

  it.only('should Login with valid credentials', () => {
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
      .contains('Forgot your password?')

    cy.loginToApplication(data.loginName, data.password)

    cy.url().should(
      'eq',
      'https://automationteststore.com/index.php?rt=account/account'
    )
    cy.title().should('eq', 'My Account')
    accountPage
      .welcomeUserProfileTxt()
      .should('be.visible')
      .contains('Welcome back')
    accountPage
      .accountDashboardTxt()
      .should('be.visible')
      .contains('Account Dashboard')
    accountPage.accountDashboardWidget().should('be.visible')
    accountPage.editAccountDetailsLink().click()
    cy.url().should('eq','https://automationteststore.com/index.php?rt=account/edit')
    cy.title().should('eq', 'My Account Information')
    accountEditPage.editInformationMenuTxt().should('be.visible')
    accountEditPage.myAccountInformationHeadingText().should('be.visible')
    accountEditPage.userNameTxt().should('be.visible')
    accountEditPage
      .firstNameBox()
      .should('be.visible')
      .clear()
      .type(data.firstName)
    accountEditPage
      .lastNameBox()
      .should('be.visible')
      .clear()
      .type(data.lastName)

    accountEditPage.generateEmail()

    accountEditPage
      .telephoneBox()
      .should('be.visible')
      .clear()
      .type(data.telephone)
    accountEditPage.faxBox().should('be.visible').clear().type(data.fax)
    accountEditPage.continueEditBtn().click({ delay: 1000 })
    // accountEditPage.continueEditBtn().click({ delay: 1000 })
    accountPage
      .successYourAccountSuccessfullyUpdatedTxt()
      .should('be.visible')
      .contains('Success: Your account has been successfully updated.')
    accountPage
      .logoffLink()
      .should('be.visible')
      .click()
      .then(function (linkText) {
        cy.log('Clicked on link using text: ' + linkText.text())
      })
    cy.url().should('eq', 'https://automationteststore.com/index.php?rt=account/logout')
    cy.title().should('eq', 'Account Logout')
    accountLogoutPage.accountLogoutHeadingTxt().should('be.visible')
    accountLogoutPage.saveToLogoutTxt().should('be.visible')
    accountLogoutPage.logoutAccountContinueBtn().should('be.visible').click()
    cy.url().should('eq', 'https://automationteststore.com/')
    cy.title().should('eq', 'A place to practice your automation skills!')

  })
})

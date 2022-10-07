/// <reference types="Cypress" />
import TopNavPage from '../../../support/pages/TopNavPage'
import AccountLoginPage from '../../../support/pages/AccountLoginPage'
import AccountCreatePage from '../../../support/pages/AccountCreatePage'
import AccountSuccessPage from '../../../support/pages/AccountSuccessPage'
import AccountPage from '../../../support/pages/AccountPage'
import AccountLogoutPage from '../../../support/pages/AccountLogoutPage'

const topNavPage = new TopNavPage()
const accountLoginPage = new AccountLoginPage()
const register = new AccountCreatePage()
const accountSuccessPage = new AccountSuccessPage()
const accountPage = new AccountPage()
const accountLogoutPage = new AccountLogoutPage()

describe('Verify Login functionality', () => {
  before(function () {
    cy.fixture('register').then(function (data) {
      globalThis.data = data
    })
  })

  beforeEach('should navigate from Home to Login Page', () => {
    //cy.navigateToLoginPage()
    cy.visit('https://automationteststore.com/')
    cy.document().its('contentType').should('eq', 'text/html')
    cy.url().should('eq', 'https://automationteststore.com/')
    cy.title().should('eq', 'A place to practice your automation skills!')
    topNavPage.logoImage().should('be.visible')
    topNavPage.loginOrRegisterLink().should('be.visible').click()
    cy.url().should(
      'eq',
      'https://automationteststore.com/index.php?rt=account/login'
    )
    cy.title().should('eq', 'Account Login')
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
    register.continueBtn().should('be.visible').click()
  })

  it.only('should register account with valid credentials', () => {
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

        cy.fillCreateAccountForm(
          data.firstName,
          data.lastName,
          data.telephone,
          data.fax,
          data.companyName,
          data.addressOne,
          data.addressTwo,
          data.cityName,
          data.regionOrStateName,
          data.zipOrPostCode,
          data.countryName,
          data.password,
          data.confirmPassword
        )

        cy.url().should(
          'eq',
          'https://automationteststore.com/index.php?rt=account/success'
        )
        cy.title().should('eq', 'Your Account Has Been Created!')
        accountSuccessPage.successSubMenuTxt().should('be.visible')
        accountSuccessPage
          .yourAccountHasBeenCreatedHeadingTxt()
          .should('be.visible')
          .contains(' Your Account Has Been Created')
        accountSuccessPage
          .congratulationsYourAccountSuccessfullyCreatedTxt()
          .should('be.visible')
        accountSuccessPage
          .continueAccountSuccessBtn()
          .should('be.visible')
          .click()
        accountPage
          .logoffLink()
          .should('be.visible')
          .click()
          .then(function (linkText) {
            cy.log('Clicked on link using text: ' + linkText.text())
          })
        cy.url().should(
          'eq',
          'https://automationteststore.com/index.php?rt=account/logout'
        )
        cy.title().should('eq', 'Account Logout')
        accountLogoutPage.accountLogoutHeadingTxt().should('be.visible')
        accountLogoutPage.saveToLogoutTxt().should('be.visible')
        accountLogoutPage
          .logoutAccountContinueBtn()
          .should('be.visible')
          .click()
        cy.url().should('eq', 'https://automationteststore.com/')
        cy.title().should('eq', 'A place to practice your automation skills!')
      })
  })
})

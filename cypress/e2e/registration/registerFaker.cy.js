/// <reference types="Cypress" />

import TopNavComponent from '../../../support/pages/components/TopNavComponent'
import IndexPage from '../../../support/pages/IndexPage'
import AccountLoginPage from '../../../support/pages/AccountLoginPage'
import AccountCreatePage from '../../../support/pages/AccountCreatePage'
import AccountSuccessPage from '../../../support/pages/AccountSuccessPage'
import AccountPage from '../../../support/pages/AccountPage'
import AccountLogoutPage from '../../../support/pages/AccountLogoutPage'
import { faker } from '@faker-js/faker'

const indexPage = new IndexPage()
const topNavPage = new TopNavComponent()
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
		cy.visit('https://automationteststore.com/')
		cy.document().its('contentType').should('eq', 'text/html')
		cy.url().should('eq', 'https://automationteststore.com/')
		cy.title().should('eq', 'A place to practice your automation skills!')

        topNavPage.logoImage().then(function(logoelement){
              cy.log(logoelement.text())
            })

        topNavPage.topNav().should('have.length', 4)
        topNavPage.catMenuList().should('have.length', 30)
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
		accountLoginPage
			.continueBtn()
			.should('be.visible')
			.and('be.enabled')
			.click()
	})

	it('should register an account with valid credentials', () => {
		cy.url().should(
			'eq',
			'https://automationteststore.com/index.php?rt=account/create'
		)

		cy.screenshot({ capture: 'fullPage' })
		register.subMenu().should('have.length', 3).and('be.visible')

		cy.title().should('eq', 'Create Account')
		register
			.loginPageLink()
			.should('be.visible')
			.and('have.text','If you already have an account with us, please login at the login page.')
		register
			.createAccountTxt()
			.should('have.text', ' Create Account')
			.and('be.visible')

		//Scrolling top to down and Up//
		register.continueBtn().scrollIntoView()
		cy.wait(2000)
        register.createAccountTxt().scrollIntoView()
		//Your Personal Details//
		register
			.yourPersonalDetailsTxt()
			.should('have.text', 'Your Personal Details')
			.and('be.visible')
			.then(personalDetails => {
				cy.log('Text = >> ' + personalDetails.text())
				register
					.firstNameBox()
					.should('be.visible')
					.clear()
					.type(faker.name.firstName())
				register
					.lastNameBox()
					.should('be.visible')
					.clear()
					.type(faker.name.lastName())
				register.enterGeneratedEmail()
				register
					.telephoneBox()
					.should('be.visible')
					.clear()
					.type(faker.phone.number())
				register
					.faxBox()
					.should('be.visible')
					.clear()
					.type(faker.phone.number())

				//Your Address//
				register
					.yourAddressSectionTxt()
					.should('have.text', 'Your Address')
					.and('be.visible')
				register
					.companyNameBox()
					.should('be.visible')
					.clear()
					.type(faker.company.companyName())
				register
					.address1Box()
					.should('be.visible')
					.clear()
					.type(faker.address.street())
				register
					.address2Box()
					.should('be.visible')
					.clear()
					.type(faker.address.streetName())
				register
					.cityBox()
					.should('be.visible')
					.clear()
					.type(faker.address.city())
				register
					.regionStateDropdownBtn()
					.select('Lancashire')
					//.select(faker.address.county())
					.should('be.visible')
				register
					.zipCodeBox()
					.should('be.visible')
					.clear()
					.type(faker.address.zipCode())
				register
					.countryDropdownBtn()
					.select(data.countryName)
					.should('be.visible')
					.and('have.value', '222')

				//Login Details//
				register
					.loginDetailsSectionTxt()
					.should('have.text', 'Login Details')
					.and('be.visible')
					.then(loginDetails => {
						cy.log('Text = >> ' + loginDetails.text())
						register.enterGeneratedLoginName()
						register
							.passwordBox()
							.should('be.visible')
							.clear()
							.type(data.password)
						register
							.confirmPasswordBox()
							.should('be.visible')
							.clear()
							.type(data.confirmPassword)

						//Newsletter//
						register
							.newsletterTxt()
							.should('have.text', 'Newsletter')
							.and('be.visible')
						register
							.subscribeYesRadioBtn()
							.should('be.visible')
							.check()
							.should('be.checked')

						register.agreeToPrivacyPolicyTxt().should('be.visible')
						register.iagreeToPrivacyPolicyBtn().should('be.visible').click()
						register.continueBtn().should('be.visible').click()

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
							.congratulationsYourAccountSuccessfullyCreatedTxt()
							.screenshot()
						accountSuccessPage
							.continueAccountSuccessBtn()
							.should('be.visible')
							.click()
						accountPage.logoffLink().should('be.visible').click()
						cy.url().should(
							'eq',
							'https://automationteststore.com/index.php?rt=account/logout'
						)
						cy.title().should('eq', 'Account Logout')
						accountLogoutPage.accountLogoutHeadingTxt().should('be.visible')
						accountLogoutPage
							.saveToLogoutTxt()
							.should('be.visible')
							.then(save => {
								cy.log('Text = >> ' + save.text())
							})

						accountLogoutPage
							.logoutAccountContinueBtn()
							.should('be.visible')
							.click()
						cy.url().should('eq', 'https://automationteststore.com/')
						cy.title().should(
							'eq',
							'A place to practice your automation skills!'
						)
					})

				it('should not login with invalid credentials => blanks', () => {
					register
						.continueBtn()
						.contains('Continue')
						.should('be.visible')
						.click()

					register
						.registerForm()
						.contains('Error: You must agree to the Privacy Policy!')
						.should('be.visible')
					register
						.registerForm()
						.contains('First Name must be between 1 and 32 characters!')
						.should('be.visible')
					register
						.registerForm()
						.contains('Email Address does not appear to be valid!')
						.should('be.visible')
					register
						.registerForm()
						.contains('Zip/postal code must be between 3 and 10 characters!')
						.should('be.visible')
					register
						.registerForm()
						.contains(
							'Login name must be alphanumeric only and between 5 and 64 characters!'
						)
						.should('be.visible')
					register
						.registerForm()
						.contains('Password must be between 4 and 20 characters!')
						.should('be.visible')
					cy.title().should('eq', 'Create Account')
				})
			})
	})
})

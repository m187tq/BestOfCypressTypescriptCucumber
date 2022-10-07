/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />


// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// tslint:disable-next-line:eofline
// }
import TopNavPage from '../support/pages/TopNavPage.cy';
import AccountLoginPage from '../support/pages/AccountLoginPage.cy';
import AccountCreatePage from '../support/pages/AccountCreatePage.cy';

const topNaviPage = new TopNavPage();
const accountLoginPage = new AccountLoginPage();
const register = new AccountCreatePage();

Cypress.Commands.add('navigateToIndexPage', () => {
  cy.visit('https://automationteststore.com/');
});

Cypress.Commands.add('login', function (loginName, password) {
  cy.get('#loginFrm_loginname').type(loginName);
  cy.get('#loginFrm_password').type(password);
  cy.get('#loginFrm > fieldset > .btn').click();
});

Cypress.Commands.add('loginApplication:', (loginName, password) => {
  accountLoginPage.login(loginName, password);
});

Cypress.Commands.add('loginToApplication', (loginName, password) => {
  accountLoginPage.login(loginName, password);
});

Cypress.Commands.add('navigateToLoginPage', () => {
  cy.visit('https://automationteststore.com/');
  topNaviPage
    .signInLink()
    .should('be.visible')
    .and('contain', 'Sign in')
    .click();
});

Cypress.Commands.add(
  'fillCreateAccountForm',
  function (
    firstName,
    lastName,
    telephone,
    fax,
    companyName,
    addressOne,
    addressTwo,
    cityName,
    regionOrStateName,
    zipOrPostCode,
    countryName,
    password,
    confirmPassword
  ) {
    register.firstNameBox().type(firstName);
    register.lastNameBox().type(lastName);
    register.enterGeneratedEmail();
    register.telephoneBox().type(telephone);
    register.faxBox().type(fax);
    register.companyNameBox().type(companyName);
    register.address1Box().type(addressOne);
    register.address2Box().type(addressTwo);
    register.cityBox().type(cityName);
    register.regionStateDropdownBtn().select(regionOrStateName);
    register.zipCodeBox().type(zipOrPostCode);
    register.countryDropdownBtn().select(countryName);
    register.enterGeneratedLoginName();
    register.passwordBox().type(password);
    register.confirmPasswordBox().type(confirmPassword);
    register
      .newsletterTxt()
      .should('have.text', 'Newsletter')
      .and('be.visible');
    register
      .subscribeYesRadioBtn()
      .should('be.visible')
      .check()
      .should('be.checked');

    register.iagreeToPrivacyPolicyBtn().should('be.visible').click();
    register.continueBtn().should('be.visible').click();
  }
);

Cypress.Commands.add('navigateToCreateAccountPage', () => {
  cy.visit('https://automationteststore.com/');
  topNaviPage
    .registerLink()
    .should('be.visible')
    .and('contain', 'Register')
    .click();
});

Cypress.Commands.add('selectProduct', productName => {
  cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.wrap($el).eq(index).click();
    }
  });
});

Cypress.Commands.add('addProductToBasket', productName => {
  cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
    if ($el.text() === productName) {
      cy.log($el.text());
      cy.get('.productcart').eq(index).click();
    }
  });
});

Cypress.Commands.add('clickOnProductCategoryName', productCategoryName => {
  cy.xpath('//*[@id="categorymenu"]/nav/ul/li/div/ul/li/a').each(
    ($el, index, $list) => {
      if ($el.text() === productCategoryName) {
        cy.wrap($el).eq(index).click();
        cy.log($el.text());
      }
    }
  );
});

Cypress.Commands.add("webdriverUni_ContactForm_Submission", (firstName, lastName, email, comment, $selector, textToLocate) => {
  cy.get('[name="first_name"]').type(firstName);
  cy.get('[name="last_name"]').type(lastName);
  cy.get('[name="email"]').type(email)
  cy.get('textarea.feedback-input').type(comment)
  cy.get('[type="submit"]').click();
  cy.get($selector).contains(textToLocate)
})

Cypress.Commands.add(
  'selectProductCategoryName',
  function (productCategoryName) {
    cy.xpath('//*[@id="categorymenu"]/nav/ul/li/div/ul/li/a').each(
      ($el, index, $list) => {
        if ($el.text() === productCategoryName) {
          cy.wrap($el).eq(index).click({ force: true });
          cy.log($el.text());
        }
      }
    );
  }
);

import 'cypress-file-upload';
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

class AccountLoginPage {
  loginBlueMenu() {
    return cy.get('section > ul > li:nth-child(3) > a')
  }

  newcustomerForm() {
    return cy.get("[class='col-sm-6 newcustomer']")
  }

  returncustomerForm() {
    return cy.get("[class='col-sm-6 returncustomer']")
  }

  accountLoginTxt() {
    return cy.get('.maintext')
  }
  iAmANewCustomerText() {
    return cy.get("div[class='loginbox form-horizontal'] h4[class='heading4']")
  }
  returningCustomerTxt() {
    return cy.get("div[class='col-sm-6 returncustomer'] h2[class='heading2']")
  }
  checkoutOptions() {
    return cy.get('.newcustomer > div:nth-child(2) > h4:nth-child(1)')
  }
  registerAccountRadioBtn() {
    return cy.get('form#accountFrm label')
  }
  createAnAccountTxt() {
    return cy.get('.form-group.mt20.mb40')
  }
  continueBtn() {
    return cy.get('button.btn:nth-child(3)')
  }
  loginNameBox() {
    return cy.get('#loginFrm_loginname')
  }
  passwordBox() {
    return cy.get('#loginFrm_password')
  }
  forgotYourPasswordLink() {
    return cy.get('#loginFrm > fieldset:nth-child(3) > a:nth-child(3)')
  }
  forgotYourLoginLink() {
    return cy.get('#loginFrm > fieldset:nth-child(3) > a:nth-child(4)')
  }
  loginBtn() {
    return cy.get('#loginFrm > fieldset > .btn')
  }

  dangerAlertErrorLoginMessage() {
    return cy.get('.alert.alert-danger.alert-error')
  }

  inputLoginNameBox(loginName) {
    this.loginNameBox().clear().type(loginName)
  }

  inputPasswordBox(password) {
    this.passwordBox().clear().type(password)
  }

  clickOnLoginBtn() {
    this.loginBtn().click()
  }

  login(loginName, password) {
    this.inputLoginNameBox(loginName)
    this.inputPasswordBox(password)
    this.clickOnLoginBtn()
  }
}

export default AccountLoginPage

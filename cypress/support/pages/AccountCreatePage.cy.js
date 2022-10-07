
class AccountCreatePage {
  registerSubMenuTxt() {
    return cy.get('.breadcrumb > li:nth-of-type(3) > a')
  }
  yourAccountHasBeenCreatedTxt() {
    return cy.get('')
  }
  createAccountTxt() {
    return cy.get('.maintext')
  }
  loginPageLink() {
    return cy.get('#AccountFrm > p')
  }

  registerForm(){
      return cy.get("#maincontainer > .container-fluid").as("form")
  }
  subMenu(){
    return cy.get("html > body > div > div:first-of-type > div:nth-of-type(2) > section > ul > li")
  }

  //**************Your Personal Details**************//

  yourPersonalDetailsTxt() {
    return cy.get('form#AccountFrm > h4:nth-of-type(1)')
  }
  firstNameBox() {
    return cy.get('input#AccountFrm_firstname')
  }
  lastNameBox() {
    return cy.get('input#AccountFrm_lastname')
  }
  emailBox() {
    return cy.get('#AccountFrm_email')
  }
  telephoneBox() {
    return cy.get('#AccountFrm_telephone')
  }
  faxBox() {
    return cy.get('#AccountFrm_fax')
  }

  //**************Your Address*****************//

  yourAddressSectionTxt() {
    return cy.get('form#AccountFrm > h4:nth-of-type(2)')
  }
  companyNameBox() {
    return cy.get('input#AccountFrm_company')
  }
  address1Box() {
    return cy.get("input[name='address_1']")
  }
  address2Box() {
    return cy.get("input[name='address_2']")
  }
  cityBox() {
    return cy.get('input#AccountFrm_city')
  }
  regionStateDropdownBtn() {
    return cy.get('select#AccountFrm_zone_id')
  }
  zipCodeBox() {
    return cy.get('input#AccountFrm_postcode')
  }
  countryDropdownBtn() {
    return cy.get('select#AccountFrm_country_id')
  }

  //*******Login Details*****************//

  loginDetailsSectionTxt() {
    return cy.get('form#AccountFrm > h4:nth-of-type(3)')
  }
  loginNameBox() {
    return cy.get('input#AccountFrm_loginname')
  }
  passwordBox() {
    return cy.get('input#AccountFrm_password')
  }
  confirmPasswordBox() {
    return cy.get('input#AccountFrm_confirm')
  }

  //*******Newsletter*****************//

  newsletterTxt() {
    return cy.get('form#AccountFrm > h4:nth-of-type(4)')
  }

  subscribeYesRadioBtn() {
    return cy.get('#AccountFrm_newsletter1')
  }
  subscribeNoRadioBtn() {
    return cy.get('#AccountFrm_newsletter0')
  }
  iagreeToPrivacyPolicyBtn() {
    return cy.get('#AccountFrm_agree')
  }
  agreeToPrivacyPolicyTxt() {
    return cy.get('.col-md-6.mb40.mt20')
  }
  continueBtn() {
    return cy.get("button[title='Continue']")
  }

  enterGeneratedEmail(){
    let uuid = () => Cypress._.random(0, 1e6)
    let id = uuid()
    let email = `covid${id}@gmail.com`
    this.emailBox().type(email)

  }

  enterGeneratedLoginName(){
    let uuid = () => Cypress._.random(0, 1e6)
    let id = uuid()
    let loginName = `covid${id}`
    this.loginNameBox().type(loginName)

  }


}

export default AccountCreatePage

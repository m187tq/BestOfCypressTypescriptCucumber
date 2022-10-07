/* eslint-disable prettier/prettier */
class AccountEditPage {
  


  editInformationMenuTxt() {
    return cy.get('section > ul > li:nth-child(3) > a')
  }
  myAccountInformationHeadingText() {
    return cy.get('div#maincontainer span.maintext')
  }
  yourPersonalDetails() {
    return cy.get('form#AccountFrm > h4')
  }

  loginNameTxt() {
    return cy.get('form#AccountFrm div:nth-child(1) > div')
  }
  firstNameBox() {
    return cy.get('#AccountFrm_firstname')
  }
  lastNameBox() {
    return cy.get('#AccountFrm_lastname')
  }
  emailBox() {
    return cy.get('input#AccountFrm_email')
  }
  telephoneBox() {
    return cy.get('input#AccountFrm_telephone')
  }
  faxBox() {
    return cy.get('input#AccountFrm_fax')
  }
  continueEditBtn() {
    return cy.get('form#AccountFrm button[type="submit"]')
  }
  backArrowBtn() {
    return cy.get('form#AccountFrm a')
  }
  userNameTxt() {
    return cy.get('fieldset > :nth-child(1) > .input-group')
  }

  generateEmail(){
    let randomString = Math.random().toString(36).substring(3)
    const email_com = 'email_' + randomString + '@domain.com'
    this.emailBox(email_com)

  }

  
}

export default AccountEditPage

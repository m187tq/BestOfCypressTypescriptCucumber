/// <reference types="cypress" />

import ContactUsPage from '../../support/pages/ContactUsPage'
import ContactUsSuccessPage from '../../support/pages/ContactUsSuccessPage'


const contactUsPage = new ContactUsPage()
const contactUsSuccessPage = new ContactUsSuccessPage()

describe('Test Contact Us form ', () => {
  before(function() {
      cy.fixture('example').then(function(data) {
          //this.data = data;
          globalThis.data = data;
      })
  })

  beforeEach('should navigate to contact us page', () => {
    cy.visit('https://automationteststore.com/index.php?rt=content/contact')
    cy.document().its('contentType').should('eq', 'text/html')
    cy.url().should('eq', 'https://automationteststore.com/index.php?rt=content/contact')
    cy.title().should('eq', 'Contact Us')

    contactUsPage.contactUsHeadingText().should('be.visible')
    contactUsPage.addressText().should('be.visible').and('contain.text', 'Address')
    contactUsPage.telephoneTxt().should('be.visible').contains('012345 6781199')
    
  })
  it("Should be able to submit a successful submission via contact us form", () => {
    contactUsPage.submitContactUsForm(data.firstName, data.email, data.message)
    contactUsSuccessPage.successfulSubmissionMsg().should('be.visible').and('contain.text', 'Your enquiry has been successfully sent')
    cy.url().should('eq','https://automationteststore.com/index.php?rt=content/contact/success')
    cy.title().should('eq', 'Contact Us')
    contactUsSuccessPage.clickOnContinueBtn()
    cy.url().should('eq', 'https://automationteststore.com/')
    cy.title().should('eq', 'A place to practice your automation skills!')

    
  });
  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    contactUsPage.resetBtn().should('be.visible')
    contactUsPage.clickOnSubmitBtn()

    cy.url().should('eq','https://automationteststore.com/index.php?rt=content/contact&form_id=2')
    cy.title().should('eq', 'Contact Us')

    contactUsPage.firstNameErrorWarningMsg().should('contain', 'First name: is required field! Name must be between 3 and 32 characters!')
    contactUsPage.emailErrorWarningMsg().should('contain', 'Email: is required field! E-Mail Address does not appear to be valid!')
    contactUsPage.inquiryErrorWarningMsg().should('contain', 'Enquiry: is required field! Enquiry must be between 10 and 3000 characters!')

  });

  it("Validate properties of the Contact Us Page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact")

    //Uses cypress commands and chaining
    cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

    //JQuery Approach
    cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
        const firstNameText = text.find('#field_11').text()
        expect(firstNameText).to.contain('First name')

        //Embedded commands (Closure)
        cy.get('#field_11').then(fnText => {
            cy.log(fnText.text())
            cy.log(fnText)
        })
    })
});

})
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/// <reference types="Cypress" />

class ContactUsSuccessPage {

    successfulSubmissionMsg(){
        return cy.get('body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section:nth-child(1) > p:nth-child(3)')
    }

    continueBtn(){
        return cy.get('.mb40 > .btn');
    }

    clickOnContinueBtn(){
        this.continueBtn().click()
    }

}

export default ContactUsSuccessPage;

/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

/// <reference types="Cypress" />

class ContactUsPage {

    contactUsHeadingText(){
        return cy.get('.maintext');
    }

    addressText(){
        return cy.get('.content-fluid > :nth-child(1) > .pull-left');
    }
    telephoneTxt(){
        return cy.get('.content-fluid > :nth-child(1) > .pull-right');
    }

    contactUsForm(){
        return cy.get('#ContactUsFrm');
    }

    reqiuredIcon(){
        return cy.get('.required');
    }

    firstName(){
        return cy.get('#ContactUsFrm_first_name');
    }

    emailBox(){
        return cy.get('#ContactUsFrm_email');
    }

    inquiryMsgBox(){
        return cy.get('#ContactUsFrm_enquiry');
    }

    resetBtn(){
        return cy.get('.col-md-1 > .btn');
    }

    submitBtn(){
        return cy.get('.col-md-6 > .btn');
    }

    firstNameErrorWarningMsg(){
        return cy.get('#field_11 > .help-block > .element_error');
    }

    emailErrorWarningMsg(){
        return cy.get('#field_12 > .help-block > .element_error');
    }

    inquiryErrorWarningMsg(){
        return cy.get('#field_13 > .help-block > .element_error');
    }

    inputFirstNameBox(firstName){
        this.firstName().type(firstName)
    }

    inputEmailBox(email){
        this.emailBox().type(email)
    }

    inputInquiryMsgBox(inquiryMsg){
        this.inquiryMsgBox().type(inquiryMsg)
    }

    clickOnSubmitBtn(){
        this.submitBtn().click()
    }

    submitContactUsForm(firstName, email, inquiryMsg){
        this.inputFirstNameBox(firstName)
        this.inputEmailBox(email)
        this.inputInquiryMsgBox(inquiryMsg)
        this.clickOnSubmitBtn()
    }


}

export default ContactUsPage;

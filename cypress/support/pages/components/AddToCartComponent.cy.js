/* eslint-disable prettier/prettier */
/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class AddToCartComponent {

    addTocartBtn()
    {
        return cy.get('.cart')
    }

    clickOnAddToCartBtn()
    {
        this.addTocartBtn.click({force: true})
    }


}

export default AddToCartComponent;

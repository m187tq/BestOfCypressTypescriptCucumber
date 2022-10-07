/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />


class ItemProductNameComponent {

    itemHeaderLinks() {
        return cy.get('.fixed_wrapper .prdocutname');
    }
}
export default ItemProductNameComponent;
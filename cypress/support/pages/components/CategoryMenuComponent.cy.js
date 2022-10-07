/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

import NaviMenuComponent from "./NaviMenuComponent";

class CategoryMenuComponent {

    menuList() {
        return cy.get("a")
    }

    categoryMenuLink(linkText) {
        return cy.get("//a[contains(text(), '" + linkText + "')]");
    }
    catMenuList() {
        return cy.get(".nav-pills.categorymenu").as(menuList);
    }



    
}

export default NaviMenuComponent;
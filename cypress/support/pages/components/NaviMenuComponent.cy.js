/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class NaviMenuComponent {

    menuList() {
        return cy.get("#categorymenu > nav > ul > li > a")
    }

    categorymenu() {
        return cy.get("#categorymenu > nav > ul > li > a");
    }

    skinCare() {
        return cy.get(".current > a");
    }




    clickOnMenuItem(CategoryMenuName){
        this.menuList().contains(CategoryMenuName).click({force: true})
    }

    clickOnMenuCategoryProduct(CategoryMenuName){
        this.categorymenu.each(($e1, index, $list) => {
            if($e1.text()===CategoryMenuName.trim())
            {
                cy.wrap($e1).click()
            }
    })


}

}

export default NaviMenuComponent;

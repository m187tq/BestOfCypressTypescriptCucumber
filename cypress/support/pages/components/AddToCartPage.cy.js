/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class AddToCartPage {
  addProduct(element, productName) {
    cy.get(element).each(($el, index, $list) => {
      if ($el.text().includes(productName)) {
        cy.wrap($el).find('.productcart').click()
      }
    })
  }
}

export default AddToCartPage

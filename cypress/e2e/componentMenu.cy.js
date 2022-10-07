/// <reference types="cypress" />

describe('Inspect Automation Test Store items using chain of commands', () => {
    before(function () {
      cy.fixture("productName").then(function (data) {
        globalThis.data = data;
      });
    });
  
    beforeEach(function () {
      cy.visit("https://automationteststore.com/");
      // cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
      cy.get("a[href*='index.php?rt=']").contains("Hair Care").click();

    });
  
    it("Add specific items to basket", () => {
      globalThis.data.productName.forEach(function(element) {
          cy.addProductToBasket(element)
      })
      cy.get('.dropdown-toggle > .fa').click();
  });
  });
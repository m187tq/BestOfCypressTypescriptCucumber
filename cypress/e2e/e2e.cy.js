/// <reference types="cypress" />

describe('Inspect Automation Test Store items using chain of commands', () => {

  before(function () {
    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Add specific items to basket", () => {
    globalThis.data.productName.forEach(function(element) {
        cy.addProductToBasket(element)
    })
    cy.get('.dropdown-toggle > .fa').click();
});
});

  it('Click on the first item using item header', () => {
    const itemName = 'Absolue Eye Precious Cells'
    cy.visit('https://www.automationteststore.com/')
    cy.get('.prdocutname').find('a').contains(itemName).click()
  })

  it('Click on the first item using item text', () => {
    cy.visit('https://www.automationteststore.com/')
    cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
  })
  it('Click on the first item using index', () => {
    cy.visit('https://www.automationteststore.com/')
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
  })

  describe('Alias and invoke', () => {
    it('Validate a specific hair care product', () => {
      cy.visit('https://automationteststore.com/')
      cy.get("a[href*='product/category&path=']").contains('Hair Care').click()

      cy.get('.fixed_wrapper .prdocutname')
        .eq(0)
        .invoke('text')
        .as('productThumbnail')
      cy.get('@productThumbnail').its('length').should('be.gt', 5)
      cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    })
    it('Validate product thumbnail', () => {
      cy.visit('https://automationteststore.com/')
      cy.get('.thumbnail').as('productThumbnail')
      cy.get('@productThumbnail').should('have.length', 16)
      cy.get('@productThumbnail')
        .find('.productcart')
        .invoke('attr', 'title')
        .should('include', 'Add to Cart')
    })
    it.only('Calculate total of normal and sale products', () => {
      cy.visit('https://automationteststore.com/')
      cy.get('.thumbnail').as('productThumbnail')
      // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
      //     cy.log($el.text());
      // });
      cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
      cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

      var itemsTotal = 0
      cy.get('@itemPrice').then($linkText => {
        var itemsPriceTotal = 0
        var itemPrice = $linkText.split('$')
        var i
        for (i = 0; i < itemPrice.length; i++) {
          cy.log(itemPrice[i])
          itemsPriceTotal += Number(itemPrice[i])
        }
        itemsTotal += itemsPriceTotal
        cy.log('Non sale price items total: ' + itemsPriceTotal)
      })

      cy.get('@saleItemPrice')
        .then($linkText => {
          var saleItemsPrice = 0
          var saleItemPrice = $linkText.split('$')
          var i
          for (i = 0; i < saleItemPrice.length; i++) {
            cy.log(saleItemPrice[i])
            saleItemsPrice += Number(saleItemPrice[i])
          }
          itemsTotal += saleItemsPrice
          cy.log('Sale price items total: ' + saleItemsPrice)
        })
        .then(() => {
          cy.log('The total price of all products: ' + itemsTotal)
          expect(itemsTotal).to.equal(572.45)
        })
    })
  })



/* cy.wrap({ animate: fn }).invoke('animate') // Invoke the 'animate' function
cy.get('.modal').invoke('show') // Invoke the jQuery 'show' function 

    it("Uncheck and validate checkbox", () => {
        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    });

    it("Check mutiple checkboxes", () => {
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    });
    */
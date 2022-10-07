/// <reference types="cypress" />

describe('Inspect Automation Test Store items using chain of commands', () => {

  before(function () {
    cy.fixture('userLogin').then(function (data) {
      globalThis.data = data
    })
  })

  it('Add specific items by text', () => {
    cy.visit('https://automationteststore.com/')
    cy.get("a[href*='index.php?rt=']").each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes('Hair Care')) {
        cy.wrap($e1).click()
      }
    })

    cy.xpath('/html/body/div/div[2]/div/div/div/div/ul/li').as('subcat')
    cy.get('@subcat').should('have.length', 2)
    cy.get('@subcat')
    .each(($e1, index, $list) => {
      const text = $e1.text()
      if (text.includes('Shampoo'))
      {
        cy.wrap($e1).click()
      }
    })
    cy.xpath('/html/body/div/div[2]/div/div/div/div/div[2]/div')
    .each(($e1, index, $list) => {
        const text = $e1.text()
        if (
          text.includes('Eau Parfumee au The Vert Shampoo')
        ) 
        {
          cy.wrap($e1).click()
          cy.get('.cart').click()
          cy.get('tbody > :nth-child(2) > :nth-child(2) > a').should("be.visible").contains("Eau Parfumee au The Vert Shampoo")
          cy.get('#cart_quantity70').should("be.visible").clear().type(4)
          cy.get('#cart_update').should("be.visible").click()
          cy.get('#cart_checkout2').click()
          cy.loginToApplication(data.loginName, data.password)

          cy.get('#checkout_btn').click()
          cy.get('.mb40 > .btn').click()



          // https://automationteststore.com/index.php?rt=checkout/cart

          // cy.get('.maintext') //shoppingCartHeadingTx
         // cy.get('#coupon_coupon')
         // cy.get('#apply_coupon_btn')
         //cy.get('tbody > :nth-child(2) > :nth-child(4)')  //unitPrice
         //cy.get('tbody > :nth-child(2) > :nth-child(6)')// totalAmount
         // cy.get('#estimate_country') // country
         // cy.get('#estimate_country_zones')
         // cy.get('#estimate_postcode')
         //cy.get(':nth-child(2) > .input-group > .input-group-btn > .btn') // estimateBtn
         // cy.get(':nth-child(2) > :nth-child(1) > .extra')// flatRatePrice
         // cy.get(':nth-child(3) > :nth-child(2) > .bold') //totalAmountPlusflatRatePrice
        //cy.get('.col-md-6 > .btn-default') //continueShoppingBtn
        //cy.get('#cart_checkout2') //checkoutBtn

        // https://automationteststore.com/index.php?rt=account/login

        // webdriverio; webdriverio1
//https://automationteststore.com/index.php?rt=checkout/confirm
        // cy.get('.maintext') // checkhoutConfirmationHeadingTxt
        //cy.get('.heading2 > span')   summmaryOrderTxt

        //cy.get('#maincontainer > .container-fluid')// body text all

          //https://automationteststore.com/index.php?rt=checkout/success

          // cy.get('.maintext') // Your Order Has Been Processed!
          // cy.get('.mb40 > :nth-child(3)') // OrderNumber
          // cy.get('.mb40 > :nth-child(4) > a')// invoiceLink to invoicePage
          //cy.get('.mb40 > :nth-child(6)') // thanksMsg
          // cy.get('.mb40 > .btn') // continueBtn
          // https://automationteststore.com/

        }
      }
    )
  })
})  

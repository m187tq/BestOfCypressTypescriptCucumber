/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />


class CheckoutCartPage {
  couponBox() {
    return cy.xpath("//input[@id='coupon_coupon']");
  }
  applyCouponBtn() {
    return cy.get('#apply_coupon_btn');
  }
  estimateCountryDropdown() {
    return cy.get('#estimate_country');
  }
  countryZonesDropdown() {
    return cy.get('#estimate_country_zones');
  }

  estimatePostcodeBox() {
    return cy.xpath("//input[@id='estimate_postcode']");
  }
  estimateCalculatorBtn() {
    return cy.xpath(
      '//tbody/tr[2]/td[1]/div[1]/form[1]/div[2]/div[1]/span[1]/button[1]'
    );
  }
  flatRateShipmentsDropdown() {
    return cy.xpath("//select[@id='shippings']");
  }
  removeItemBtn() {
    return cy.xpath('//*[@id="cart"]/div/div[1]/table/tbody/tr[2]/td[7]/a/i');
  }

  productPrice() {
    return cy.xpath('//*[@id="cart"]/div/div[1]/table/tbody/tr[2]/td[4]');
  }
  continueShippingBtn() {
    return cy.xpath('//*[@id="cart"]/div/div[3]/div/a[1]');
  }
  updateBtn() {
    return cy.get('#cart_update');
  }
  productImage() {
    return cy.xpath('//*[@id="cart"]/div/div[1]/table/tbody/tr[2]/td[1]/a/img');
  }
  yourShoppingCartIsEmptyTxt() {
    return cy.xpath(
      "//div[contains(text(),'\tYour shopping cart is empty!\t')]"
    );
  }
  addQuantityBox() {
    return cy.xpath(
      '/html[1]/body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/table[1]/tbody[1]/tr[2]/td[5]/div[1]/input[1]'
    );
  }
  shoppingCartTxt() {
    return cy.get('.maintext');
  }
  checkoutBtn() {
    return cy.get('#cart_checkout1');
  }

  subPrice() {
    return cy.get('//*[@id="totals_table"]/tbody/tr[1]/td[2]/span');
  }
  productTotalPrice() {
    return cy.get('//*[@id="cart"]/div/div[1]/table/tbody/tr[2]/td[6]');
  }
  productGrandTotalPrice() {
    return cy.get('//*[@id="totals_table"]/tbody/tr[3]/td[2]/span');
  }
}
export default CheckoutCartPage;

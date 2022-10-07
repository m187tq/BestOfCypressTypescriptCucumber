/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

class TopNavComponent {
  menuList() {
    return cy.get('a');
  }

  logoImage() {
    return cy.get('a.logo');
  }

  loginOrRegisterLink() {
    return cy.get('#customernav');
  }
  topNav() {
    return cy.get('#main_menu_top > li');
  }

  topMenuList() {
    return cy.get('li.dropdown');
  }

  catMenuList() {
    return cy.get("a[href*='product/category&path=']");
  }

  specialsLinkTxt() {
    return cy.get(
      '#main_menu_top > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)'
    );
  }

  accountDropdownBtn() {
    return cy.get('.menu_account');
  }

  accountLoginDropdownBtn() {
    return cy.get(
      "li[class='dropdown open'] a[class='sub menu_login'] span[class='menu_text']"
    );
  }
  accountLogoutBtn() {
    return cy.get('ul#main_menu_top ul > li.dropdown.open > a > span');
  }

  accountCheckYourOrderDropdownBtn() {
    return cy.get(
      'body > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)'
    );
  }

  cartLinkTxt() {
    return cy.get(
      '#main_menu_top > li:nth-child(3) > a:nth-child(1) > span:nth-child(2)'
    );
  }

  checkoutLinkTxt() {
    return cy.get(
      '#main_menu_top > li:nth-child(4) > a:nth-child(1) > span:nth-child(2)'
    );
  }

  sliderBanner() {
    return cy.get('#banner_slides');
  }

  searchBox() {
    return cy.get('#filter_keyword');
  }

  searchBtn() {
    return cy.get('.button-in-search');
  }

  welcomeBackTxt() {
    return cy.get('');
  }

  currencyDropdown() {
    return cy.get('b.caret:nth-child(2)');
  }

  itemsCartDropdown() {
    return cy.get('.topcart > li:nth-child(1) > a:nth-child(1)');
  }

  socialIconFacebook() {
    return cy.get('.facebook');
  }

  socialIconTwitter() {
    return cy.get('.twitter');
  }

  socialIconLinkedIn() {
    return cy.get('.linkedin');
  }

  accountLogoutLink() {
    return cy.get('');
  }

  accountCheckYourOrderLink() {
    return cy.get(
      'ul#main_menu_top  .dropdown-menu.sub_menu  .menu_order.sub > .menu_text'
    );
  }
  async clickMenuItem() {
    cy.get('@menubarLocator').each(($el, index, $list) => {
      const menuTxt = $el.text();
      if (menuTxt.includes('  Hair Care')) {
        cy.log(menuTxt);
      }
    });
  }
}

export default TopNavComponent;

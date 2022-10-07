/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />


import TopNavComponent from '../support/pages/components/TopNavComponent';
import NaviMenuComponent from '../support/pages/components/NaviMenuComponent';

const topNav = new TopNavComponent();
const naviMenu = new NaviMenuComponent();

describe('Verify navigation functionality', () => {

  before(function () {
    cy.fixture('productName').then(function (data) {
      globalThis.data = data;
    });
  });
  
  beforeEach('should navigate from Home to Login Page', () => {
    //cy.visit('')
    cy.navigateToIndexPage();
    cy.document().its('contentType').should('eq', 'text/html');
    // cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.window().should('have.property', 'top');
    cy.url().should('eq', 'https://automationteststore.com/');
    cy.title().should('eq', 'A place to practice your automation skills!');
    cy.title().should('include', 'automation skills!');
    cy.get('.logo').should('be.visible');
    topNav.logoImage().should('be.visible');
  });

  it('Add multiple items to basket', () => {
    const categoryMenuName = 'Skincare';
    naviMenu.menuList().each(($el, index, $list) => {
      if ($el.text().includes(categoryMenuName)) {
        cy.wrap($el).click();
      }
      cy.log('Index: ' + index + ' : ' + $el.text());
    });
    globalThis.data.productName.forEach(function (element) {
      cy.addProductToBasket(element);
    });
    cy.get('.dropdown-toggle > .fa').click();
  });
});

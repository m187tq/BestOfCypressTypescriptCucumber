/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />


describe('Inspect Automation Test Store items using chain of commands', () => {
  before(function () {
    cy.fixture('productName').then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    cy.visit('/');
    cy.contains('Form Layouts').click({ force: true });
    //cy.get('.menu-item').contains('Form Layouts').click({force: true});
  });

  it('0 invoking username', () => {
    cy.get('.user-name').then(username => {
      cy.wrap(username).invoke('text').should('contain', 'Nick Jones');
    });
  });

  it('1st verify check buttons', () => {
    cy.contains('nb-card', 'Using the Grid').as('gridForm');
    cy.get('@gridForm')
      .find('[for="inputEmail1"]')
      .invoke('text')
      .should('eq', 'Email');
  });
  it('2nd verify check buttons', () => {
    //cy.contains('nb-card', 'Basic form').find(':nth-child(3) > nb-checkbox > .label > .text')
    cy.contains('nb-card', 'Basic form')
      .find(':nth-child(3) > nb-checkbox > .label > .text')
      .should('be.visible')
      .should('not.be.checked')
      .click();
  });
  it.only('4th verify check buttons', () => {
    //cy.contains('nb-card', 'Basic form').find(':nth-child(3) > nb-checkbox > .label > .text')
    cy.xpath('/html/body/ngx-app/ngx-pages/ngx-one-column-layout/nb-layout/div/div/div/div/div/nb-layout-column/ngx-form-elements/ngx-form-layouts/div/div/nb-card/nb-card-body/form/div/div/nb-radio-group/nb-radio')
      .eq(0)
      .click();
  });


 
  it('3 invoking email box invoke (prop value)', () => {
    cy.contains('nb-card', 'Using the Grid').then(input => {
      cy.wrap(input).find('#inputEmail1').type('Thank God')
      cy.wrap(input).invoke('prop', 'value').should('contain', 'Thank God');
    });
  });
});

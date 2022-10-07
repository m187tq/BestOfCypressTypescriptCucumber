/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />


describe('Inspect Automation Test Store items using chain of commands', () => {
  before(function () {
    cy.fixture('productName').then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    cy.visit('http://localhost:4200');
    cy.contains('Form Layouts').click({ force: true });
    //cy.get('.menu-item').contains('Form Layouts').click({force: true});
    //cy.contains('Sign in'[2]).click()
  });
  it('1st verify the first form labels(Using the Grid)', () => {
    cy.contains('nb-card', 'Using the Grid').as('gridForm');
    cy.get('@gridForm')
      .find('[for="inputEmail1"]')
      .contains('Email')
      .should('be.visible');
    cy.get('@gridForm').contains('Radios').should('be.visible');
    cy.get('@gridForm').contains('Option 2').should('be.visible');
    cy.get('@gridForm')
      .find('[type="submit"]')
      .contains('Sign in')
      .should('be.visible');
  });
  it('3rd verify the first form labels (Using the Grid)', () => {
    cy.contains('nb-card', 'Using the Grid').then(form => {
      const emailTxt = form.find('[for="inputEmail1"]').text();
      const passwordTxt = form.find('[for="inputPassword2"]').text();
      console.log('Label names: ' + emailTxt + ' ' + passwordTxt);
      expect(emailTxt).to.equals('Email');
      expect(passwordTxt).to.equals('Password');
    });
  });
  it('2nd verify the first form labels (Using the Grid)', () => {
    cy.contains('nb-card', 'Using the Grid').then(form1 => {
      cy.wrap(form1)
        .find('[for="inputEmail1"]')
        .should('contain.text', 'Email');
      cy.wrap(form1)
        .find('[for="inputPassword2"]')
        .should('contain.text', 'Password');
    });

  });
});

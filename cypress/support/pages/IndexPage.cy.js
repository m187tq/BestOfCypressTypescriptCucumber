/// <reference types="Cypress" />

class IndexPage {
  visitHomePage() {
    cy.visit(Cypress.env('automationteststore_url'));
  }
}

export default IndexPage;

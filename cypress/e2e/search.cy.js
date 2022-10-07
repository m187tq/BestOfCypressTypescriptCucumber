/// <reference types="cypress" />


describe('Test Contact Us form ', () => {
  before(function() {
      cy.fixture('example').then(function(data) {
          //this.data = data;
          globalThis.data = data;
      })
  })

  beforeEach('should navigate to search resukt page', () => {
    cy.visit('https://automationteststore.com/index.php')
    cy.document().its('contentType').should('eq', 'text/html')

  })
  it("Should be able to search a product as see the result page", () => {
    cy.get('#filter_keyword').clear().type('makeup')
    cy.get('.button-in-search > .fa').click({force:true})
    cy.get('.maintext').should('be.visible').contains('Search')
    cy.get('.contentpanel > :nth-child(3)').should('be.visible').contains('Products meeting the search criteria')
    
    cy.get('.grid').as('gridLocator')
    cy.get('@gridLocator').find('div.thumbnail:visible').should('be.visible').and('have.length', 3)
    
    //cy.get('div.thumbnail:visible').eq(1).click()

    cy.get('@gridLocator').find('div.thumbnail:visible').each(($el, index, $list) => {

      const productText=$el.find('.prdocutname:visible').text()

      if(productText ==('Skinsheen Bronzer Stick')){
      cy.wrap($el)
      .find('.thumbnail > .pricetag > .productcart > .fa:visible')
      .click({force: true})
      }

      })

  });
 
})
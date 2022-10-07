/// <reference types="cypress" />

describe('Inspect Automation Test Store items using chain of commands', () => {
    before(function () {
        cy.fixture('products').then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click()
    })

    it('Add specific items to basket', () => {
        it('Click on the first item using item header', () => {
            cy.visit('https://www.automationteststore.com/')
            cy.get(
                '#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname'
            ).click()
        })

    it('Click on the first item using item text', () => {
            cy.visit('https://www.automationteststore.com/')
            cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
        })

    it('Click on the first item using index', () => {
            cy.visit('https://www.automationteststore.com/')
            cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
        })
    })
})

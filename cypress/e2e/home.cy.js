///<reference types="Cypress" />
import HomePage from '../../support/pages/HomePage'
import TopNavComponent from '../../support/pages/components/TopNavComponent'

const topNav = new TopNavComponent()
const homePage = new HomePage()

describe('should display lengths of headers, menus, links and noOfProduct in home page', () => {
    before(function () {
        cy.fixture('userLogin').then(function (data) {
            globalThis.data = data
        })
    })
    beforeEach('should navigate Home', () => {
        //cy.visit('')
        homePage.navigateToHomePageUrl()
        cy.document().its('contentType').should('eq', 'text/html')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.window().should('have.property', 'top')
        cy.url().should('eq', 'https://automationteststore.com/')
        cy.title().should('eq', 'A place to practice your automation skills!')
        cy.title().should('include', 'automation skills!')
        topNav.logoImage().should('be.visible')
        homePage.dataBanner10().should('be.visible')
        homePage.welcomeMsg().should('be.visible')

    })

    it('should display lengths of top menu in home page', () => {
        // top menu, category menu, products displayed and footer
        const topMenuName = 'Account'
        homePage.topMenuList().as('topMenu')
        cy.get('@topMenu')
            .should('have.length', 14)
            .each(($el, index, $list) => {
                cy.log($el.text())
                /* if ($el.text().includes(topMenuName)) {
                     cy.wrap($el).click()
                   }*/
            })
    })
    it('should display promo blocks in home page', () => {
        const promoBlockName = 'Shipping Options'
        homePage.promoBlock().as('promo')
        cy.get('@promo')
            .should('have.length', 4)
            .each(($el, index, $list) => {
                cy.log($el.text())
                /* if ($el.text().includes(promoBlockName)) {

                 }*/
            })
    })

    it('should displayed lengths of category Menu in home page',
        () => {
            const categoryMenuName = 'Skincare'
            homePage.categorymenu().as('catMenu')
            cy.get('@catMenu')
                .should('have.length', 8)
                .each(($el, index, $list) => {
                    if ($el.text().includes(categoryMenuName)) {
                        cy.log($el.text())
                    }
                })

        })
    it('should display lengths of certain products in home page', () => {
        const displayedProductName = 'Acqua Di Gio Pour Homme'
        homePage.allDisplayedProducts().as('displayedProducts')
        cy.get('@displayedProducts')
            .should('have.length', 16)
            .find('.prdocutname')
            .each(($el, index, $list) => {
                // if ($el.text().includes(displayedProductName)) {
                cy.log($el.text())

            })
    })

    it('should display price of products in home page', () => {
        homePage.allDisplayedProducts().as('displayedProducts')
        cy.get('@displayedProducts')
            .should('have.length', 16)
            .find('.price')
            .each(($el, index, $list) => {
                cy.log($el.text())
            })
    })

    it('should display all Add to Cart of products in home page', () => {
        homePage.allDisplayedProducts().as('displayedProducts')
        cy.get('@displayedProducts')
            .should('have.length', 16)
            .find('.productcart')
            .invoke('attr', 'title')
            .should('include', 'Add to Cart')
    })

    it('should display all links of a tag in home page', () => {
        homePage.allLinks().as('allLinksLocator')
        cy.get('@allLinksLocator')
            .each(($el, index, $list) => {
                cy.log($el.text())

            })
    })

    it('should be able to hover over and click an element - Account', () => {
        const eleName = 'Account'
        homePage.allLinks().as('allLinksLocator')
        cy.get('@allLinksLocator')
            .each(($el, index, $list) => {
                if ($el.text().includes(eleName)) {
                    $el.trigger('mouseover')
                    // cy.wrap($el).click()
                }
            })
    })

    it("Validate product thumbnail", () => {
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });

    it("Calculate total of normal and sale products", () => {
        cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        // });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        let itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            let itemsPriceTotal = 0;
            let itemPrice = $linkText.split('$');
            let i;
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemsPriceTotal;
            cy.log("Non sale price items total: " + itemsPriceTotal)
        })

        cy.get('@saleItemPrice').then($linkText => {
            let saleItemsPrice = 0;
            let saleItemPrice = $linkText.split('$');
            let i;
            for (i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemsPrice += Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsPrice;
            cy.log("Sale price items total: " + saleItemsPrice)
        })
            .then(() => {
                cy.log("The total price of all products: " + itemsTotal)
                expect(itemsTotal).to.equal(572.45)
            })

    })
})
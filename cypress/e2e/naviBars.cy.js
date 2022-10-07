///<reference types="Cypress" />
import TopNavComponent from '../../support/pages/components/TopNavComponent'
import NaviMenuComponent from '../../support/pages/components/NaviMenuComponent'
import HomePage from '../../support/pages/HomePage'
import AccountLoginPage from '../../support/pages/AccountLoginPage'
import ProductIDPage from "../../support/pages/ProductIDPage";
import CheckoutCartPage from "../../support/pages/CheckoutCartPage";



const homePage = new HomePage()
const topNav = new TopNavComponent()
const naviMenu = new NaviMenuComponent()
const loginPage = new AccountLoginPage()
const idPage = new ProductIDPage()
const checkoutCartPage = new CheckoutCartPage()

describe('Verify Login functionality', () => {
    before(function () {
        cy.fixture('userLogin').then(function (data) {
            globalThis.data = data
        })
    })
    beforeEach('should navigate from Home to Login Page', () => {
        //cy.visit('')
        homePage.navigateToHomePageUrl()
        cy.document().its('contentType').should('eq', 'text/html')
        // cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.window().should('have.property', 'top')
        cy.url().should('eq', 'https://automationteststore.com/')
        cy.title().should('eq', 'A place to practice your automation skills!')
        cy.title().should('include', 'automation skills!')
        cy.get('.logo').should('be.visible')
        topNav.logoImage().should('be.visible')
        homePage.welcomeMsg().should('be.visible')
    })

    it('should click on a menu tab, add a product and to cart by text => blanks', () => {
        const categoryMenuName = "Skincare"
        const productName = "Total Moisture Facial Cream"
        // naviMenu.menuList().contains(categoryMenuName).click()
        naviMenu.menuList()
            .each(($el, index, $list) => {
                if ($el.text().includes(categoryMenuName)) {
                    cy.wrap($el).click()
                }
                cy.log("Index: " + index + " : " + $el.text())

                homePage.productsNameLinks()
                    .contains(productName)
                    .each(($el, index, $list) => {
                        if ($el.text().includes(productName)) {
                            cy.wrap($el).click()
                        }
                        cy.log("Index: " + index + " : " + $el.text())

                        idPage.productImage().should('be.visible')
                        idPage.productHeadingTxt().should('be.visible')
                        idPage.totalPrice().should('be.visible')
                        idPage.printIcon().should('be.visible')
                        idPage.clickAddToCartBtn()

                        cy.get('#cart_quantity66').should('be.visible')
                            .should('be.visible')
                            .clear()
                            .type('2')
                        checkoutCartPage.clickUpdateBtn()
                        checkoutCartPage.continueShippingBtn().should('be.visible')
                        checkoutCartPage.clickCheckoutBtn()

                        loginPage.loginNameBox()
                            .clear()
                            .type(data.loginName)
                        loginPage.passwordBox()
                            .clear()
                            .type(data.password)
                        loginPage.loginBtn().click()

                        cy.get('.maintext').should('be.visible')
                        cy.get('.heading2 > span').should('be.visible')
                        cy.get('.contentpanel > p').should('be.visible')
                        cy.get('[style="width: 100%; border-spacing: 2px;"] > tbody > tr > .align_left').should('be.visible')
                        cy.get('#checkout_btn').click()
                        //cy.get('.maintext').should('be.visible')
                        //cy.get('.mb40 > :nth-child(3)').should('be.visible')
                        //cy.get('.mb40').should('be.visible')
                        cy.get('.mb40 > .btn').click()

                    })
            })
    })
})

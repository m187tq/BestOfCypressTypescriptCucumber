/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />


import TopNavComponent from '../../support/pages/components/TopNavComponent'
import NaviMenuComponent from '../../support/pages/components/NaviMenuComponent'
import IndexPage from '../../support/pages/IndexPage'
import AccountLoginPage from '../../support/pages/AccountLoginPage'
import CheckoutCartPage from "../../support/pages/CheckoutCartPage";
import AddToCartComponent from "../../support/pages/components/AddToCartComponent";

const indexPage = new IndexPage()
const topNav = new TopNavComponent()
const naviMenu = new NaviMenuComponent()
const loginPage = new AccountLoginPage()
const checkoutCartPage = new CheckoutCartPage()
const addToCartComponent = new AddToCartComponent()

describe('Verify navigation functionality', () => {
    before(function () {
        cy.fixture('userLogin').then(function (data) {
            globalThis.data = data
        })
    })
    beforeEach('should navigate from Home to Login Page', () => {
        //cy.visit('')
        cy.navigateToIndexPage()
        cy.document().its('contentType').should('eq', 'text/html')
        // cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.window().should('have.property', 'top')
        cy.url().should('eq', 'https://automationteststore.com/')
        cy.title().should('eq', 'A place to practice your automation skills!')
        cy.title().should('include', 'automation skills!')
        cy.get('.logo').should('be.visible')
        topNav.logoImage().should('be.visible')

    })

    it('should click on a menu tab, add a product and to cart by text => blanks', () => {
        const categoryMenuName = "Skincare"
        const productName = "Total Moisture Facial Cream"
        // naviMenu.menuList().contains(categoryMenuName).click()
        naviMenu.menuList()
            .each(($el, index, $list) => {
                if ($el.text().includes(categoryMenuName)) 
                {
                    cy.wrap($el).click()
                }
                cy.log("Index: " + index + " : " + $el.text())

               
                })
                cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
                    if ($el.text().includes(productName)) 
                    {
                        cy.wrap($el).click()
                    }
                    cy.log("Index: " + index + " : " + $el.text())

                    
            })
            
            addToCartComponent.addTocartBtn().click()
            cy.url().should('eq','https://automationteststore.com/index.php?rt=checkout/cart')
            cy.title().should('eq', 'Shopping Cart')
            
    })

})

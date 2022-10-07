class BasePage {

    openDesiredBrowserUrl() {
        cy.log("Navigating to Url 'https://automationteststore.com/'");
        return cy.url(`https://automationteststore.com/`);
    }

    async navigateToHomePageUrl() {
       cy.url("https://automationteststore.com/");
       cy.log("Navigating to Url 'https://automationteststore.com/'");
    }

}

export default BasePage;

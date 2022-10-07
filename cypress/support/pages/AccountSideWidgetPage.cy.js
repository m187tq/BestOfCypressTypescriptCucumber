class AccountSideWidgetPage{

    get accountSideWidgetLinks() {
        return cy.get('div.sidewidt');
    }
    get accountDashboardLink() {
        return cy.get('div#maincontainer li.selected > a');
    }

    get MyWistListLink() {
        return cy.get('div#maincontainer div.sidewidt > div > ul > li:nth-child(2) > a');
    }

    get editAccountDetailsLink() {
        return cy.get('ul#customer_menu_top div');
    }

    get changePasswordLink() {
        return cy.get('div#maincontainer div.sidewidt > div > ul > li:nth-child(4) > a');
    }

    get manageAddressBookLink() {
        return cy.get('div#maincontainer div.sidewidt > div > ul > li:nth-child(5) > a');
    }

    get orderHistoryLink() {
        return cy.get('div#maincontainer div.sidewidt > div > ul > li:nth-child(6) > a');
    }
    get transactionHistoryLink() {
        return cy.get('div#maincontainer div.sidewidt > div > ul > li:nth-child(7) > a');
    }

    get downloadLink(){
        return cy.get('div#maincontainer div.sidewidt > div > ul > li:nth-child(8) > a');
    }
    get NotificationLink(){
        return cy.get('div#maincontainer div.sidewidt > div > ul > li:nth-child(9) > a');
    }
    get LogoffLink(){
        return cy.get('div#maincontainer li:nth-child(10) > a');
    }

}

export default AccountSideWidgetPage;

/* eslint-disable prettier/prettier */

class AccountPage{


    welcomeUserProfileTxt() {
        return cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text');
    }

    myAccountTxt() {
        return cy.get('div#maincontainer h1');
    }

    editAccountDetailsLink() {
        return cy.get(".side_account_list > li:nth-of-type(3) > a");
    }

    accountDashboardTxt() {
        return cy.get('div#maincontainer li.selected > a');
    }

    logoffBtn() {
        return cy.get("div#maincontainer li:nth-child(10) > a");
    }

    successYourAccountSuccessfullyUpdatedTxt() {
        return cy.get('.alert.alert-success');
    }

//===================================================//
    editAccountDetailsImage(){
        return cy.get("div#maincontainer div.col-md-9.col-xs-12.mt20 > div > ul > li:nth-child(1) > a > i")
    }

    changePasswordImageLink(){
        return cy.get('.nav-dash .fa-keya');
    }
    manageAddressBookImagelink(){
        return cy.get('.nav-dash .fa-booka');
    }
    MyWistListImageLink(){
        return cy.get('.nav-dash .fa-star');
    }
    orderHistoryLink() {
        return cy.get('li:nth-of-type(5) > a > .fa.fa-briefcase');
    }
    transactionHistoryLink() {
        return cy.get('li:nth-of-type(6) > a > .fa.fa-money');
    }

    downloadLink() {
        return cy.get('.nav-dash .fa-cloud-download');
    }

    NotificationLink() {
        return cy.get('.nav-dash .fa-bullhorn');
    }

    logoffLink(){
        return cy.get(".side_account_list > li:nth-of-type(10) > a");
    }

    accountDashboardWidget(){
        return cy.get(".column_right")
    }


}

export default AccountPage;

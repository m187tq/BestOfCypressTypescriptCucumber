/* eslint-disable prettier/prettier */
class AccountAddressPage {

    get addressBookHeadingTxt() {
        return cy.get('div#maincontainer span.maintext');
    }
    get addressBookEntriesText() {
        return cy.get('div#maincontainer h4');
    }
}

export default AccountAddressPage();

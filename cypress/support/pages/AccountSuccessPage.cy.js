class AccountSuccessPage {
  successSubMenuTxt() {
    return cy.get('.breadcrumb > li:nth-of-type(3) > a')
  }
  yourAccountHasBeenCreatedHeadingTxt() {
    return cy.get('div#maincontainer h1')
  }
  congratulationsYourAccountSuccessfullyCreatedTxt() {
    return cy.get('.mb40 > p:nth-of-type(2)')
  }
  continueAccountSuccessBtn() {
    return cy.get(".mb40 > a[title='Continue']")
  }
}

export default AccountSuccessPage;

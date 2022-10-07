class AccountSummaryPage {

    savingsBalTxt() {
        return cy.get(':nth-child(2) > .board-content > .table > tbody > :nth-child(2) > :nth-child(3)')
    }

    accountSummaryTab() {
        return cy.get('#account_summary_tab > a')
    }

    userProfileDropdown() {
        return cy.get(':nth-child(3) > .dropdown-toggle > .caret')
    }

    logoutButton() {
        return cy.get('#logout_link')
    }

}

export default AccountSummaryPage;

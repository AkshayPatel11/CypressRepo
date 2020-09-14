export default class AccountLinks 
{
    static clickSummary()
    {
        cy.get('#account_summary_tab').click()
    }

    static clickActivity()
    {
        cy.get('#account_activity_tab').click()
    }

    static clickTransferFund()
    {
        cy.get('#transfer_fund_tab').click()
    }

    static clickPayBills()
    {
        cy.get('#pay_bills_tab').click()
    }

    static MoneyApp()
    {
        cy.get('#money_map_tab').click()
    }

    static clickOnLineStatements ()
    {
        cy.get('#online_statements_tab').click()
    }
}
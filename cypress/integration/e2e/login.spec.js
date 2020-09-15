import { values } from 'cypress/types/lodash'
/// <reference types="Cypress" />
import { url, login_username, login_password } from '../../../Config'
import Navbar from '../../Page-Objects/Components/Navbar'
import Loginpage from '../../Page-Objects/Pages/LoginPage'



describe('Login Failed Test', function () {
    before(function () {
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it.only('Test DataBase Connection with SQL', function () {
        cy.sqlServer(`select * from sales.order_items`).then(function (recordset) {
            //Collect data base vaue in recordset
            var rec = recordset
            const Values = Object.values(rec[0]);
            const keys = Object.keys(rec[0]);
            cy.log(values)
            let result = {};
            let index = 0;
            
            keys.forEach(key => {
                result[keys[index]] = Values[index];
                cy.log(result)
                index++
            })
            //result.firstName will give you your results
            cy.log(result.firstName);
        })
    })

    it('Should try to login with invalid Credentials ', () => {
        Loginpage.login('invalid username', 'invalid password')
    })

    it('Should display error message ', () => {
        Loginpage.displayErrorMessage()
    })
})


describe.skip('Login Succces test', () => {

    before(function () {
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('Should try to login with invalid Credentials ', () => {
        Loginpage.login(login_username, login_password)
    })

    it('Sould logout from application', () => {
        Navbar.logout()
        Navbar.displaySignInButton()
    })

})
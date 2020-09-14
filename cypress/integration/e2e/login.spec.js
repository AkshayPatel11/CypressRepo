/// <reference types="Cypress" />
import  {url,login_username,login_password} from '../../../Config'
import Navbar from '../../Page-Objects/Components/Navbar'
import Loginpage from '../../Page-Objects/Pages/LoginPage'



describe('Login Failed Test', function()
{
    before(function (){
        cy.visit(url) 
        Navbar.clickSignIn()  
    })

    it('Should try to login with invalid Credentials ',()=>{
        Loginpage.login('invalid username','invalid password')
    })

    it('Should display error message ',()=>{
        Loginpage.displayErrorMessage()
    })
})


describe('Login Succces test', ()=>{

    before(function (){
        cy.visit(url) 
        Navbar.clickSignIn()  
    })

    it('Should try to login with invalid Credentials ',()=>{
        Loginpage.login(login_username,login_password)
    })

    it('Sould logout from application', () =>{
        Navbar.logout()
        Navbar.displaySignInButton()
    })
})
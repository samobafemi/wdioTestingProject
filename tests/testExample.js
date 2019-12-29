const assert = require('assert')
const LoginPage = require('../pageObjects/LoginPage');
const{expect} = require('chai')

describe('webdriver.io page', () => {

    // afterEach(function(){
    //     LoginPage.close()
    // })

    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
    it('visit Orange HRM and successful login',function(){
        let username = 'Admin'
        let password = 'admin123'
        LoginPage.loginToApp( username, password)
        expect(LoginPage.getPageUrl()).to.contains('index.php/dashboard')
        //LoginPage.close()

    })
    it('visit Orange HRM and unsuccessful login',function(){
        let username = 'Admin'
        let password = 'admin1'
        LoginPage.reloadNewSession()
        LoginPage.loginToApp( username, password)
        expect(LoginPage.getPageUrl()).to.contains('validateCredentials')

    })
    it('should logout and be on the login page',function(){
        let username = 'Admin'
        let password = 'admin123'
        LoginPage.reloadNewSession()
        LoginPage.logOutOfApp( username, password)
        expect(LoginPage.getPageUrl()).to.contains('index.php/auth/login')

    })
    

})
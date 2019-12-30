const assert = require('assert')
const LoginPage = require('../../pageObjects/LoginPage');
const{expect} = require('chai')

describe('OrangeHRM testing', () => {

    // afterEach(function(){
    //     LoginPage.close()
    // })

    describe('Login Scenerios', function() {

    it('should allow you to log in using valid credentials',function(){
        let username = 'Admin'
        let password = 'admin123'
        LoginPage.loginToApp( username, password)
        expect(LoginPage.getPageUrl()).to.contains('index.php/dashboard')
        //LoginPage.close()

    })
    it('should not allow you to log in using invalid credentials',function(){
        let username = 'Admin'
        let password = 'admin1'
        LoginPage.openNewBrowser()
        LoginPage.loginToApp( username, password)
        expect(browser.getUrl()).to.contains('validateCredentials')

    })
    it('should allow you to log in using valid credentials and then log out',function(){
        let username = 'Admin'
        let password = 'admin123'
        LoginPage.openNewBrowser()
        LoginPage.logOutOfApp(username, password)
        expect(browser.getUrl()).to.contains('index.php/auth/login')

    })
    

})
})
const assert = require('assert')
const LoginPage = require('../../pageObjects/LoginPage');
const{expect} = require('chai')

describe('OrangeHRM testing', function() {

    // beforeEach(function(){
    //     browser.url('./')
    // })

    describe('Login Scenerios', function() {

        beforeEach(function(){
        browser.url('./')
    })

    it('should allow you to log in using valid credentials',function(){
        LoginPage.loginToApp('Admin', 'admin123')
        expect(browser.getUrl()).to.contains('index.php/dashboard')
        //LoginPage.close()

    })
    it('should not allow you to log in using invalid credentials', function(){
       // 
        LoginPage.openNewBrowser()
        LoginPage.loginToApp('Admin', 'admin120')
        expect(browser.getUrl()).to.contains('validateCredentials')

    })
    it('should allow you to log in using valid credentials and then log out',function(){
        LoginPage.openNewBrowser()
        LoginPage.logOutOfApp('Admin', 'admin123')
        expect(browser.getUrl()).to.contains('index.php/auth/login')

    })
    

})
})
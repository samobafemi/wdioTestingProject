'use strict';
const BasePage = require('./BasePage')
const dataHelpers = ('../lib/dataHelpers')

class LoginPage extends BasePage {

    getUserName() {
        return $('#txtUsername')
    }
    getPassword() {
        return $('#txtPassword')
    }
    getLoginButton(){
        return $('#btnLogin')
    }
    getPageUrl() {
        return browser.getUrl()
    }
    getPageErrorMessage() {
        return $('#spanMessage')
    }
    getPageWelcomeMessage() {
        return $('#welcome')
    }
    getLogOutButton() {
        return $('#welcome-menu > ul > li:nth-child(2) > a')
    }
    visit(){
        super.visit('https://opensource-demo.orangehrmlive.com/')
    }
    loginToApp(username, password) {
        this.visit()
        this.getUserName().setValue(username)
        this.getPassword().setValue(password)
        this.getLoginButton().click()
    }
    logOutOfApp(username, password) {
        this.visit()
        this.getUserName().setValue(username)
        this.getPassword().setValue(password)
        this.getLoginButton().click()
        this.getPageWelcomeMessage().click()
        this.getLogOutButton().click()
        // const button = $('#welcome')
        // button.waitForExist(4000)
       

    }
   

    
}
    
module.exports = new LoginPage()
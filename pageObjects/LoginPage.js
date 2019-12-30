'use strict';
const BasePage = require('./BasePage')
const dataHelpers = ('../lib/dataHelpers')

class LoginPage extends BasePage {

    get userName() {
        return $('#txtUsername')
    }
    get password() {
        return $('#txtPassword')
    }
    get loginButton(){
        return $('#btnLogin')
    }
    get pageUrl() {
        return browser.getUrl()
    }
    get pageErrorMessage() {
        return $('#spanMessage')
    }
    get pageWelcomeMessage() {
        return $('#welcome')
    }
    get logOutButton() {
        return $('[href="/index.php/auth/logout"]')
    }
    visit(){
        super.visit('./')
    }
    loginToApp(username, password) {
        this.visit()
        this.userName.waitForExist()
        this.userName.setValue(username)
        this.password.waitForExist()
        this.password.setValue(password)
        this.loginButton.waitForExist()
        this.loginButton.click()
    }
    logOutOfApp(username, password) {
        this.loginToApp(username, password)
        this.pageWelcomeMessage.isClickable()
        this.pageWelcomeMessage.click()
        //$('//a[text()="Logout"]').isClickable().click()
        //browser.elementClick('[href="/index.php/auth/logout"]')
        this.logOutButton.isClickable()
        this.logOutButton.click()
        // const button = $('#welcome')
        // button.waitForExist(4000)
    }

    
}
    
module.exports = new LoginPage()
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
        this.userName.setValue(username)
        this.password.setValue(password)
        this.loginButton.click()
    }
    logOutOfApp(username, password) {
        this.visit()
        this.userName.setValue(username)
        this.password.setValue(password)
        this.loginButton.click()
       // browser.elementClick()
        this.pageWelcomeMessage.click()
        //$('//a[text()="Logout"]').isClickable().click()
        //browser.elementClick('[href="/index.php/auth/logout"]')
        this.logOutButton.click()
        // const button = $('#welcome')
        // button.waitForExist(4000)
       

    }
    
}
    
module.exports = new LoginPage()
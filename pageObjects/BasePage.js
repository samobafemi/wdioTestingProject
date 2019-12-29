class BasePage {

    visit(url) {
       return  browser.url(url)
        
    }

    wait() {
       return browser.pause(3000)
    }
    close() {
        return browser.closeWindow()
    }
    quit() {
        return browser.closeApp()
    }
    reloadNewSession() {
        return browser.reloadSession()
    }
}
module.exports = BasePage
'use strict';
const BasePage = require('./BasePage');
const dataHelpers = '../lib/dataHelpers';

class LoginPage extends BasePage {
	get userName() {
		return $('#txtUsername');
	}
	get password() {
		return $('#txtPassword');
	}
	get loginButton() {
		return $('#btnLogin');
	}
	get pageUrl() {
		return browser.getUrl();
	}
	get pageErrorMessage() {
		return $('#spanMessage');
	}
	get pageWelcomeMessage() {
		return $('#welcome');
	}
	get logOutButton() {
		return $('[href="/index.php/auth/logout"]');
	}
	visit() {
		super.visit('');
	}
	loginToApp({ username, password }) {
		this.userName.waitForExist();
		this.userName.setValue(username);
		this.password.waitForExist();
		this.password.setValue(password);
		this.loginButton.waitForExist();
		this.loginButton.click();
	}
	logOutOfApp({ username, password }) {
		this.loginToApp({ username, password });
		this.pageWelcomeMessage.isExisting();
		this.pageWelcomeMessage.isClickable();
		this.pageWelcomeMessage.click();
		this.logOutButton.isExisting();
		this.logOutButton.isClickable();
		this.logOutButton.click();
	}
}

module.exports = new LoginPage();

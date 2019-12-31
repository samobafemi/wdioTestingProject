const LoginPage = require('../../pageObjects/LoginPage');
const { expect } = require('chai');
const { user1, user2 } = require('../fixtures/users');

describe('OrangeHRM testing', function() {
	describe('Login Scenerios', function() {
		beforeEach(function() {
			LoginPage.visit();
		});

		it('should allow you to log in using valid credentials', function() {
			LoginPage.loginToApp(user1);
			expect(browser.getUrl()).to.contains('index.php/dashboard');
			//LoginPage.close()
		});

		it('should not allow you to log in using invalid credentials', function() {
			LoginPage.loginToApp(user2);
			expect(browser.getUrl()).to.contains('validateCredentials');
		});
		it('should allow you to log in using valid credentials and then log out', function() {
			LoginPage.logOutOfApp(user1);
			expect(browser.getUrl()).to.contains('index.php/auth/login');
		});
	});
});

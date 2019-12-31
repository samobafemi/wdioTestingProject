const expect = require('chai').expect;
describe.skip('Login Page', function() {
	beforeEach(function() {
		browser.url('https://demo.learnwebdriverio.com/login');
	});
	it('should let you log in', function() {
		$('input[type="email"]').setValue('demowdio@example.com');
		$('input[type="password"]').setValue('wdiodemo');
		const $signIn = $('button*=Sign in');
		$signIn.click();
		$signIn.waitForExist(undefined, true);
		// Get the URL of the page, which should no longer include 'login'
		expect(browser.getUrl()).to.not.include('/login');
	});
	it('should error with a missing username', function() {
		$('input[type="password"]').setValue('wdiodemo');
		$('button*=Sign in').click();
		// assert that error message is showing
	});

	it('should error with a missing password', function() {
		$('input[type="email"]').setValue('demowdio@example.com');
		$('button*=Sign in').click();
		// assert that error message is showing
	});
});

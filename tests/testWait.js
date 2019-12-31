//const LoginPage = require('../pageObjects/LoginPage')
const { expect } = require('chai');

describe.skip('Test waits', function() {
	it('test waitForExist', function() {
		browser.url('https://demo.learnwebdriverio.com');
		const homeLink = $('li:nth-child(2) > a');
		homeLink.waitForExist();
		homeLink.click();
		expect(browser.getUrl()).to.contains('editor');
	});
});

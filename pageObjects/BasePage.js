class BasePage {
	visit(url) {
		return browser.url(url);
	}

	wait() {
		return browser.pause(3000);
	}
	close() {
		return browser.closeWindow();
	}
	quit() {
		return browser.closeApp();
	}
	openNewBrowser() {
		return browser.reloadSession();
	}
	getMetadata() {
		return {
			url: this.getUrl(),
			title: this.getTitle(),
		};
	}
	getPageUrl() {
		return browser.getUrl();
	}
}

module.exports = BasePage;

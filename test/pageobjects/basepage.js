const config = require("../../wdio.conf");
const helper = require('../../utils/ActionHelper');
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        helper.launchBrowserUrl(path);
        browser.setWindowSize(1920, 1080);
        browser.waitForUrl(path,4000);
        return browser.pageLoaded();
    }
}

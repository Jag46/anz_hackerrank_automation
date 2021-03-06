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
        browser.waitForUrl(path,4000);
        browser.maximizeWindow();
        return browser.pageLoaded();
    }
}

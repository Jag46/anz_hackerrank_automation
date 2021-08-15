const BasePage = require('./basepage');
const helper = require('../../utils/ActionHelper')
const testdata = require('../../data/globalTestData')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class accountCreationPage extends BasePage {
    /**
     * define selectors using getter methods
     */
     get createAccountURL() {return 'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation'};
     get idgender () { return $('#id_gender1') }
     get firstName () { return $('#customer_firstname')}
     get lastName () {return $('#customer_lastname')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    setUserDataForSignIn () {
        helper.selectRadio(this.idgender);
        helper.setValue(this.firstName, testdata.userCreationData.firstName);
        helper.setValue(this.lastName, testdata.userCreationData.lastName);
        helper.pause(4);
    }

    /**
     * Validation methods for accountCreationPage
     */
     validateCreatAccountPageDisplayed(){
        browser.waitForUrl(this.createAccountURL, 6000);
        return browser.pageLoaded();
    }
}

module.exports = new accountCreationPage();

const BasePage = require('./basepage');
const helper = require('../../utils/ActionHelper');
const { launchBrowserUrl } = require('../../utils/ActionHelper');
const testdata = require('../../data/globalTestData')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SigninPage extends BasePage {
    /**
     * define selectors using getter methods
     */
     get LoginURL() {return 'http://automationpractice.com/index.php?controller=authentication&back=my-account'};
     get emailText () { return $('#email_create') }
     get signInButton () { return $('#SubmitCreate')}
     
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    signin () {
        helper.setValue(this.emailText, testdata.userCreationData.email);
        browser.waitThenClick(this.signInButton);
    }

    /**
     * overwrite specifc options to adapt it to page object
    */

    isOpen(){
        return super.open(this.LoginURL);
    }

}

module.exports = new SigninPage();

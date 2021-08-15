const BasePage = require('./basepage');
const helper = require('../../utils/ActionHelper');
const { launchBrowserUrl } = require('../../utils/ActionHelper');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SigninPage extends BasePage {
    /**
     * define selectors using getter methods
     */
     get emailText () { return $('#email_create') }
     get signInButton () { return $('#SubmitCreate')}
     get createAccountPage () {return $('#account-creation_form')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    signin (email) {
        this.emailText.setValue(email);
        this.signInButton.click();
    }

    pageDisplayValidation(){
        browser.pause(3000)
        helper.isVisible(this.createAccountPage);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('controller=authentication&back=my-account');
    }
}

module.exports = new SigninPage();

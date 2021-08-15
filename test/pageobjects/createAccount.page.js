const BasePage = require('./basepage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class accountCreationPage extends BasePage {
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

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('controller=authentication&back=my-account');
    }
}

module.exports = new SigninPage();

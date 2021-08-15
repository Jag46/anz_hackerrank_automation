const BasePage = require('./basepage');
const helper = require('../../utils/ActionHelper')
const testdata = require('../../data/globalTestData')
const expectChai = require('chai').expect;
const { default: $ } = require('webdriverio/build/commands/browser/$');

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
     get email () { return $('#email')}
     get password () {return $('#passwd')}
     get registerButton() {return $('')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    //Action methods

    setUserDataForSignIn () {
        helper.selectRadio(this.idgender);
        helper.setValue(this.firstName, testdata.userCreationData.firstName);
        helper.setValue(this.lastName, testdata.userCreationData.lastName);
        let emailText = helper.getAttribute(this.email, 'value');
        expectChai(testdata.userCreationData.email).to.equal(emailText);
    }

    clickRegisterButton() {
        helper.click(this.registerButton);
    }

    //Validation methods

     validateCreatAccountPageDisplayed(){
        browser.waitForUrl(this.createAccountURL, 6000);
        return browser.pageLoaded();
    }
}

module.exports = new accountCreationPage();

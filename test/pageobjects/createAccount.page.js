const BasePage = require('./basepage');
const helper = require('../../utils/ActionHelper')
const testdata = require('../../data/globalTestData')
const expectChai = require('chai').expect;

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
     get dayFiled () {return $('#days')}
     get monthFiled () {return $('#months')}
     get yearFiled () {return $('#years')}
     get newsletter () {return $('#newsletter')}
     get optin () {return $('#optin')}
     get addressFirstName () {return $('#firstname')}
     get addressLastName () {return $('#lastname')}
     get company () {return $('#company')}
     get addressLine1 () {return $('#address1')}
     get addressLine2 () {return $('#address2')}
     get city () {return $('#city')}
     get state () {return $('#id_state')}
     get country () {return $('#id_country')}
     get postcode () {return $('#postcode')}
     get mobile () {return $('#phone_mobile')}
     get aliasName () {return $('#alias')}
     get registerButton() {return $('#submitAccount')}
     get MyAccount() {return $('//h1')}
     get myAccountURL() {return 'http://automationpractice.com/index.php?controller=my-account'};
     get userAccountName() {return $('a[title="View my customer account"] span')};

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
        helper.setValue(this.password, testdata.userCreationData.password);
        helper.selectDropDownByindex(this.dayFiled, 2);
        helper.selectDropDownByindex(this.monthFiled, 2);
        helper.selectDropDownByindex(this.yearFiled, 22);
        helper.setValue(this.addressFirstName, testdata.userCreationData.firstName);
        helper.setValue(this.addressLastName, testdata.userCreationData.lastName);
        helper.setValue(this.addressLine1, testdata.userCreationData.address1);
        helper.setValue(this.addressLine2, testdata.userCreationData.address2);
        helper.setValue(this.city, testdata.userCreationData.city);
        helper.setValue(this.company, testdata.userCreationData.company);
        helper.setValue(this.postcode, testdata.userCreationData.postcode);
        helper.selectDropDownByindex(this.state, 5);
        helper.selectDropDownByindex(this.country, 1);
        helper.setValue(this.mobile, testdata.userCreationData.phone_mobile);
    }

    clickRegisterButton() {
        helper.click(this.registerButton);
    }

    //Validation methods

    validateCreatAccountPageDisplayed(){
        browser.waitForUrl(this.createAccountURL, 6000);
        return browser.pageLoaded();
    }

    validateMyAccountPageDisplayed() {
        browser.waitForUrl(this.myAccountURL, 6000);
        return browser.pageLoaded();
    }

    validateUserAccountText() {
        let accountText = helper.getText(this.MyAccount);
        expectChai('MY ACCOUNT').to.equal(accountText);
        let userAccountName = helper.getText(this.userAccountName);
        expectChai('John Rossi').to.equal(userAccountName);
    }


}

module.exports = new accountCreationPage();

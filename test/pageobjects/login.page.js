const BasePage = require('./basepage');
const helper = require('../../utils/ActionHelper');
const testdata = require('../../data/globalTestData');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get emailid () { return $('#email') }
    get password () { return $('#passwd')}
    get loginButton () { return $('#SubmitLogin')}
    get logoutButton () { return $('.logout')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    //Action methods
    login(){
        helper.setValue(this.emailid, testdata.userCreationData.email);
        helper.setValue(this.password, testdata.userCreationData.password);
    }

    clickSignInButton(){
        helper.click(this.loginButton);
    }

    clicklogoutButton(){
        helper.click(this.logoutButton);
    }

}

module.exports = new LoginPage();

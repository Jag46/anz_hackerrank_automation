const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');
const accountCreationPage = require('../pageobjects/createAccount.page');
const SigninPage = require('../pageobjects/signin.page')

When(/I enter the required login details$/, () => {
    LoginPage.login();
});

When(/^I click sign in button on the page$/, () => {
    LoginPage.clickSignInButton();
});

Then(/^I successfully logged into to ecomm web app$/, () => {
    accountCreationPage.validateUserAccountText();
    LoginPage.clicklogoutButton();
    expect(SigninPage.emailText).toBeExisting();
});

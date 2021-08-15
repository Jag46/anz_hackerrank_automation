const { Given, When, Then } = require('@cucumber/cucumber');
const SigninPage = require('../pageobjects/signin.page');
const accountCreationPage = require('../pageobjects/createAccount.page')

Given(/^I am on the (\w+) page$/, (page) => {
    SigninPage.isOpen();
});

When(/^I signin with "(.*)"$/, (email) => {
    SigninPage.signin(email);
});

Then(/^I should see a email field is displayed$/, () => {
    expect(SigninPage.emailText).toBeExisting();
});

Given(/^I am on the create Account page$/, ()=>{
    accountCreationPage.validateCreatAccountPageDisplayed();
    accountCreationPage.setUserDataForSignIn();
});


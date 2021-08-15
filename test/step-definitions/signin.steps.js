const { Given, When, Then } = require('@cucumber/cucumber');
const SigninPage = require('../pageobjects/signin.page');

Given(/^I am on the (\w+) page$/, (page) => {
    SigninPage.isOpen();
});

When(/^I signin with "(.*)"$/, (email) => {
    SigninPage.signin(email);
    SigninPage.pageDisplayValidation();
});

Then(/^I should see a email field is displayed$/, () => {
    expect(SigninPage.emailText).toBeExisting();
});


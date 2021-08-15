const { Given, When, Then } = require('@cucumber/cucumber');
const SigninPage = require('../pageobjects/signin.page');

const pages = {
    login: SigninPage
}

Given(/^I am on the (\w+) page$/, (page) => {
    pages[page].open();
    browser.pause(3000);
});

When(/^I signin with "(.*)"$/, (email) => {
    SigninPage.signin(email);
    SigninPage.pageDisplayValidation();
});

Then(/^I should see a email field is displayed$/, () => {
    browser.setWindowSize(1820, 1080);
    expect(SigninPage.emailText).toBeExisting();
});


const { Given, When, Then } = require('@cucumber/cucumber');
const SigninPage = require('../pageobjects/signin.page');
const accountCreationPage = require('../pageobjects/createAccount.page');

Given(/^I am on the (\w+) page$/, (page) => {
    SigninPage.isOpen();
});

When(/I signin with email id and click createAccount Button$/, () => {
    SigninPage.signin();
});

Then(/^I should see a email field is displayed$/, () => {
    expect(SigninPage.emailText).toBeExisting();
});

When(/^I am on the create Account page$/, ()=>{
    accountCreationPage.validateCreatAccountPageDisplayed();
});

When(/^I enter the require details for signin user account$/, ()=>{
    accountCreationPage.setUserDataForSignIn();
});

When(/^I click on register button$/, ()=>{
    accountCreationPage.clickRegisterButton();
});

Then(/^I successfully signed in to ecomm web app$/, ()=>{
    accountCreationPage.validateMyAccountPageDisplayed();
});

Then(/^I validate the user account name on the page$/, ()=>{
    accountCreationPage.validateUserAccountText();
});
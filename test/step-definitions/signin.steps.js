const { Given, When, Then } = require('@cucumber/cucumber');
const SigninPage = require('../pageobjects/signin.page');
const accountCreationPage = require('../pageobjects/createAccount.page');
const createAccountPage = require('../pageobjects/createAccount.page');

Given(/^I am on the (\w+) page$/, (page) => {
    SigninPage.isOpen();
});

When(/^I signin with "(.*)"$/, (email) => {
    SigninPage.signin(email);
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
    createAccountPage.clickRegisterButton()
});

Then(/^I successfully signed in to ecomm web app$/, ()=>{
    
});

const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');
const accountCreationPage = require('../pageobjects/createAccount.page');
const SigninPage = require('../pageobjects/signin.page');
const ShoppingPage = require('../pageobjects/productShopping.page');

When(/I browser the required product and add into cart$/, () => {
    ShoppingPage.addProductToCart();
});

When(/^I proceed to payment page with required details$/, () => {
    ShoppingPage.moveToPaymentPage();
});

Then(/^I successfully verified the selected product on payment page$/, () => {
    ShoppingPage.validateProductName();
});
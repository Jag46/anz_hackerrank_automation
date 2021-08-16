const BasePage = require('./basepage');
const helper = require('../../utils/ActionHelper');
const expectChai = require('chai').expect;
const contentPage = require('../contents/productShopping');
const LoginPage = require('../pageobjects/login.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShoppingPage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get womenMenu () { return $('//a[@title="Women"]') }
    get tShirtLink () { return $('li[class="sfHover"] a[title="T-shirts"]')}
    get productLink () { return $('//a[normalize-space()="Faded Short Sleeve T-shirts"]')}
    get cartLink () { return $('//span[normalize-space()="Add to cart"]')}
    get productCheckoutLink () { return $('//span[normalize-space()="Proceed to checkout"]')}
    get signInCheckoutLink () {return $('//a[@class="button btn btn-default standard-checkout button-medium"]//span[contains(text(),"Proceed to checkout")]')}
    get addressCheckoutLink () {return $('//button[@name="processAddress"]')}
    get carrierCheckoutLink () {return $('//button[@name="processCarrier"]')}
    get tncLink () {return $('label[for="cgv"]')}
    get headerText () {return $('//h1')}
    get productText () {return $('=Faded Short Sleeve T-shirts')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    //Action methods
    addProductToCart(){
        this.womenMenu.moveTo({x:30, y:20});
        helper.click(this.tShirtLink);
        helper.click(this.productLink);
        helper.click(this.cartLink);
    }

    moveToPaymentPage(){
        helper.click(this.productCheckoutLink);
        helper.click(this.signInCheckoutLink);
        if(helper.getUrlText()==contentPage.productSignUrl){
            LoginPage.login();
            LoginPage.clickSignInButton();
        }
        helper.click(this.addressCheckoutLink);
        helper.click(this.tncLink);
        helper.click(this.carrierCheckoutLink);
    }

    //Validation methods
    validateProductName(){
        let headerText = helper.getText(this.headerText);
        expectChai(contentPage.headerText).to.equal(headerText);
        let productText = helper.getText(this.productText);
        expectChai(contentPage.productName).to.equal(productText);
    }

}

module.exports = new ShoppingPage();

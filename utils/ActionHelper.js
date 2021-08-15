class ActionHelper {

    /**
   * This class contains generic methods which is common accross the page 
   */

    /**
   * This method is for launchBrowserUrl
   * @param {url} url to be launch
   */
    static launchBrowserUrl(urlToLaunch) {
        browser.url(urlToLaunch)
    }

    /**
   * This method is for getTitle of the page
   */
    static getTitle() {
        return browser.getTitle();
    }

    static pause(seconds) {
        browser.pause(seconds * 1000);
    }

    static isVisible(locator) {
        return $(locator).isDisplayed() ? true : false;
    }

    static waitForElement(locator, waitTimeInSeconds) {
        $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
    }


    /**
   * This method returns a CSS attribute value of a specifed element
   * @param {Element} element Element locator
   * @param {String} attributeName The attribute you would like to return
   */
    static getAttribute(element, attributeName) {
    browser.waitUntil(() => element.getAttribute(attributeName) != null, {
      timeout: 5000,
      timeoutMsg: "Unable to get attribute within the timeout",
    });
    var value = element.getAttribute(attributeName);
    return value;
    }

  /**
   * This method clears any text from a specifed element
   * @param {Element} element Element locator (Should be a text field)
   */
    static clearTextBoxValue(element) {
    element.setValue(new Array(element.getValue().length).fill("Backspace"));
    }

  /**
   * This method sets a value in a given element
   * @param {Element} element Element locator (Should be a text field)
   * @param {String} value Value you want to set in a field
   */
    static setValue(element, value) {
    if (value != "") {
      element.waitForEnabled();
      element.setValue(new Array(element.getValue().length).fill("Backspace"));
      element.setValue(value);
     }
    }

  /**
   * This method sets a value in a given element
   * @param {Element} element Element locator (Should be a text field)
   * @param {String} value Value you want to set in a field
   */

    static getValue(element){
    return element.getValue();
    }

  /**
   * This method clicks an element when it has become clickable
   * @param {Element} element Element locator
   */
    static click(element) {
    element.waitForClickable();
    element.click();
  }

  /**
   * This method waits for an element to become enabled and then clicks it
   * @param {Element} element Element locator
   */
  static selectRadio(element) {
    element.waitForEnabled();
    element.click();
  }

  /**
   * This method returns text from a specified elemnet
   * @param {Element} element  Element locator
   */
  static getText(element) {
    element.waitForDisplayed();
    return element.getText();
  }

  /**
   * This method waits a specifed amount of time for an element to be displayed
   * @param {Element} element  Element locator
   * @param {Int} time  Passed as seconds
   */
  static waitforElementDisplayed(element, time) {
    element.waitForDisplayed(time * 1000);
  }

  /**
   * This method waits for an element to become enabled and then clicks it allowing the dropdown values to be accessed
   * @param {Element} element  Element locator of the dropdown
   * @param {String} value Value you want to select from the dropdown
   */
  static selectDropDownByValue(element, value) {
    element.waitForEnabled();
    element.click();
    element.selectByVisibleText(value);
  }

   /**
   * This method waits for an element to become enabled and then clicks it allowing the dropdown values to be accessed
   * @param {Element} element  Element locator of the dropdown
   * @param {String} value Value you want to select from the dropdown
   */
     static selectFilterableDropDownByValue(element, value) {
      element.waitForEnabled();
      element.click();
      value.click()
    }

  /**
   * This method checks an element exists in the DOM and returns a boolean
   * @param {Element} element  Element locator
   */
  static isAvailable(element) {
    return element.isExisting();
  }

  /**
   * This method checks an element is selected and returns a boolean
   * @param {Element} element  Element locator
   */
  static isSelected(element) {
    return element.isSelected();
  }

  /**
   * This method accepts a browser alert
   */
  static acceptAlert() {
    browser.acceptAlert();
  }

  /**
   * This method switches to a specified frame in the browser object
   * @param {String} iframe  Frame idenifier
   */
  static switchFrame(iframe) {
    browser.switchToFrame(iframe);
  }

  /**
   * This method switches back to the browsers parent frame
   */
  static switchToParentFrame() {
    browser.switchToParentFrame();
  }

  /**
   * This method actives the browser back button
   */
  static browserBack() {
    browser.back();
  }

  /**
   * This method closes the browsers window
   */
  static closeWindow() {
    browser.closeWindow();
  }

  /**
   * This method switches to the browsers last window handle
   */
  static switchToLastWindow() {
    browser.switchToWindow(
      browser.getWindowHandles()[browser.getWindowHandles().length - 1]
    );
  }

}

module.exports = ActionHelper;
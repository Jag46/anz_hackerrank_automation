module.exports = {
    waitThenClick: function(element) {
        element.waitForExist()
        element.waitForDisplayed()
        element.click()
    },
    waitForUrl: function(url, timeout) {
        browser.waitUntil(() => browser.getUrl() == url, {
        timeout: timeout,
        timeoutMsg: `Expected url to change after ${timeout}ms, current url is ${browser.getUrl()}.`,
        interval: '1000'
    })
    },
    pageLoaded: function (timeout) {

        try {
            return browser.waitUntil(() => {
                let state = browser.execute(function () {
                        return document.readyState;
                    })
                    return state === 'complete';
                }, timeout, '')
        } catch (error) {
            let message = 'Page not loaded:'
    
            throw new Error(message)
        }
    }
}
  
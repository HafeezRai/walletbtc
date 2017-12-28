var Page = require('../pageobjects/Page');

function createPageElement(selector) {
  return { get: function () { return browser.element(selector) } }
};

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */

    get_started: createPageElement('//XCUIElementTypeOther[@name="Get started"]'),
    username: createPageElement('//XCUIElementTypeOther[@name="Username"]/XCUIElementTypeOther[2]]/XCUIElementTypeOther'),
    next: createPageElement('//XCUIElementTypeOther[@name="NEXT"]'),
    password: createPageElement('//XCUIElementTypeOther[@name="Password Show Password "]/XCUIElementTypeOther[2]/XCUIElementTypeOther'),
    confirm_password: createPageElement('//XCUIElementTypeOther[@name="Confirm Password Show Password "]/XCUIElementTypeOther[2]/XCUIElementTypeOther'),
    show_account_infromation: createPageElement('//XCUIElementTypeOther[@name="Show account information"]'),
    show_account_infromation: createPageElement('//XCUIElementTypeOther[@name="Hide account information"]'),
    review: createPageElement('//XCUIElementTypeOther[@name="REVIEW"]'),
    
    //REVIEW
    
    /**
     * define or overwrite page methods
     */

    clickGetStarted: { value: function() {
        this.get_started.waitForVisible(6000);
        this.get_started.click();
    } },
    setUsername:{value:function(value){
        this.username.waitForVisible(6000);
        this.username.setValue(value);
    }},
    setPassword: { value: function(value) {
        this.password.waitForVisible(6000);
        this.password.setValue(value);
    } },
    clickNext: { value: function() {
        this.next.click();
    }},
    clickAlreadyHaveAccount: { value: function() {
        this.already_have_account.waitForVisible(6000);
        this.already_have_account.click();
    }},
    setPin: { value: function(value) {
        browser.keys(value);
    }},
    
});
module.exports = LoginPage;


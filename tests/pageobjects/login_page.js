var Page = require('../pageobjects/Page');
const user = 'testing111';


function createPageElement(selector) {
  return { get: function () { return browser.element(selector) } }
};

var LoginPage = Object.create(Page, {
    
    /* --- Define elements --- */
     
    understandMsg: createPageElement('//XCUIElementTypeOther[1][@name="I Understand"]'),
    already_have_account: createPageElement('//XCUIElementTypeOther[@name="Already have an account? Sign in"]'),
    username: createPageElement('//XCUIElementTypeOther[@name="Username"][1]/XCUIElementTypeOther[2]/XCUIElementTypeOther'),
    password: createPageElement('//XCUIElementTypeOther[@name="Password"][1]/XCUIElementTypeOther[2]/XCUIElementTypeOther'),
    login: createPageElement('//XCUIElementTypeOther[@name="Login"]'),
    create_account: createPageElement('//XCUIElementTypeOther[@name="Create account"]'),

    /* --- Define page methods --- */

    clickUnderstand: { value: function(){
        this.understandMsg.waitForVisible(25000);
        this.understandMsg.click();
    } },

    setUsername: { value: function(value) {
        this.username.waitForVisible(6000);
        this.username.setValue(value);
    } },

    setPassword: { value: function(value) {
        this.password.waitForVisible(6000);
        this.password.setValue(value);
    } },

    clickLogin: { value: function() {
        this.login.click();
    }},

    clickAlreadyHaveAccount: { value: function() {
        this.already_have_account.waitForVisible(3000);
        this.already_have_account.click();  
    }},
    
    tapUsername:  { value: function() {
        browser.touchAction({ action: 'tap', x: 177, y:196 });
        browser.pause(2000);
        browser.keys('autotest01');
    }}
    
});
module.exports = LoginPage;


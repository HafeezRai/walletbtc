// Android page Object
var Page = require('../pageobjects/Page');

function createPageElement(selector) {
  return { get: function () { return browser.element(selector) } }
};

var AndroidLoginPage = Object.create(Page, {
    
    /* --- Define elements --- */

     understandMsg: createPageElement("//*[@text='I Understand']"),
     already_have_account: createPageElement("//*[@text='Already have an account? Sign in']"),
     username: createPageElement('//android.view.View[1]/android.widget.EditText'),
     password: createPageElement('//android.view.View[2]/android.widget.EditText'),
     loginBtn: createPageElement('//android.widget.TextView[@text="Login"]'),
    

    /* --- Define page methods --- */

    clickUnderstand: { value: function(){
        this.understandMsg.waitForVisible(150000);
        this.understandMsg.click();
    } },

    clickAlreadyHaveAccount: { value: function(){
        this.already_have_account.waitForVisible(10000);
        this.already_have_account.click();
    } },

    setUsername: { value: function(text){
        this.username.waitForVisible(20000);
        this.username.setValue(text);
    } },
    setPassword: { value: function(text){
        this.password.setValue(text);
    } },
    clickLogin: { value: function(){
        this.loginBtn.click();
    } },

    /* --- Login Method --- */

    login: { value: function(){
        AndroidLoginPage.clickUnderstand();
        AndroidLoginPage.clickAlreadyHaveAccount();
        AndroidLoginPage.setUsername('autotest01');
        browser.hideDeviceKeyboard();
        AndroidLoginPage.setPassword('Test123456');  //Pin is 1234
        browser.hideDeviceKeyboard();
        AndroidLoginPage.clickLogin();

    } },

});

  

module.exports = AndroidLoginPage;
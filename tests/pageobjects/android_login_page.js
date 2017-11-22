// Android page Object
var Page = require('../pageobjects/Page');

function createPageElement(selector) {
  return { get: function () { return browser.element(selector) } }
};

var AndroidLoginPage = Object.create(Page, {
    
    /* --- Define elements --- */

     understandMsg: createPageElement("//android.widget.TextView[@text='I Understand']"),
     already_have_account: createPageElement("//android.widget.TextView[@text='Already have an account? Sign in']"),
     username: createPageElement('//android.view.View[1]/android.widget.EditText'),
     password: createPageElement('//android.view.View[2]/android.widget.EditText'),
     login: createPageElement('//android.widget.TextView[@text="Login"]'),
    

    /* --- Define page methods --- */

    clickUnderstand: { value: function(){
        this.understandMsg.waitForVisible(25000);
        this.understandMsg.click();
    } },

    setUsername: { value: function(text){
        this.username.waitForVisible(6000);
        this.username.setValue(text);
    } },
    setPassword: { value: function(text){
        this.password.setValue(text);
    } },
    clickLogin: { value: function(){
        this.login.click();
    } },

    clickAlreadyHaveAccount: { value: function(){
        this.already_have_account.waitForVisible(6000);
        this.already_have_account.click();
    }},

});

module.exports = AndroidLoginPage;
var Page = require('../pageobjects/Page');
var chai = require('chai');
var user = 'autotest01';
var assert = require('assert');



function createPageElement(selector) {
  return { get: function () { return browser.element(selector) } }
};

var AndroidWalletPage = Object.create(Page, {
    
     /* --- Define elements --- */
     
     wallet: createPageElement('//android.view.ViewGroup[1]/android.widget.TextView'),
     firstWallet: createPageElement('//android.widget.ScrollView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[1]/android.widget.TextView'),
     secondWallet: createPageElement('//android.view.View[2]/android.view.View/android.view.View[1]/android.view.View[1]/android.widget.TextView'),
     requestInsideWallet: createPageElement('//android.widget.TextView[@text="Request"]'),
     alert: createPageElement('//android.widget.Button[@text="ALLOW"]'),
     more: createPageElement('//android.widget.TextView[@text="More"]'),
     logout: createPageElement('//android.widget.TextView[@text="Logout"]'),
     usernameOnExit: createPageElement('//android.view.ViewGroup[1]/android.widget.TextView[@text="'+ user +'"]'),
     pin: createPageElement('//android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]'),

     /* --- Request & Send objects --- */

     request: createPageElement('//android.view.View[1]/android.widget.TextView[@text="Request"]'),
     send: createPageElement('//android.widget.TextView[@text="Send"]'),
     copy: createPageElement('//android.widget.TextView[@text="Copy"]'),
     scan: createPageElement('//android.widget.TextView[@text="Scan"]'),
     address: createPageElement('//android.widget.TextView[@text="Address"]'),
     paste: createPageElement('//android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup[2]'),
     upDownArrow: createPageElement('//android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.TextView'),
     topText: createPageElement('//android.view.ViewGroup[1]/android.widget.EditText'),
     bottomText: createPageElement('//android.view.View/android.view.View/android.view.View/android.view.View[5]/android.view.View[2]/android.view.View[2]/android.widget.TextView[2]'),
     bitsCurrency: createPageElement('//android.widget.TextView[@text="Bits"]'),
     slideBtn: createPageElement('//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[4]'),

     /* --- Transaction objects --- */

     lastTransaction: createPageElement('//android.view.ViewGroup[6]/android.view.ViewGroup/android.view.ViewGroup[1]'),
     transactionName: createPageElement('//android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText'),
     btnSave: createPageElement('//android.widget.TextView[@text="Save"]'),
     //received: createPageElement('//android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'),
     received: createPageElement('//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'),


     /* --- Define page methods --- */


    clickAllow: { value: function(){
        this.alert.waitForVisible(300000);
        if(this.alert.isVisible() === true){
            return this.alert.click();
        }
        else {
            return
           console.log('No alert was present');
        }
        
     }},

     getFirstWallet: { value: function(text){
        this.firstWallet.waitForVisible(999999);
        chai.expect(AndroidWalletPage.firstWallet.getText()).to.be.equal(text);
    }},

    getWallets: { value: function(text, text2){
        this.firstWallet.waitForVisible(999999);
        chai.expect(AndroidWalletPage.firstWallet.getText()).to.include(text);
        chai.expect(AndroidWalletPage.secondWallet.getText()).to.include(text2);
        //assert.equal(len, '4');
    }},

    
    clickFirstWallet: { value: function(text){
        this.firstWallet.waitForVisible(999999);
        this.firstWallet.click();
    }},

    clickSecondWallet: { value: function(text){
        this.secondWallet.waitForVisible(9999999);
        this.secondWallet.click();
    }},

    clickRequestInsideWallet: { value: function(text){
        this.requestInsideWallet.waitForVisible(999999);
        this.requestInsideWallet.click();
    }},

    clickMore: { value: function(){
        this.more.waitForVisible(99999);
        this.more.click();

     }},

    clickLogout: { value: function(){
        this.logout.waitForVisible(3000);
        this.logout.click();

     }},

    checkUserTextAndPin: { value: function(text){
        this.usernameOnExit.waitForVisible(20000);
        chai.expect(AndroidWalletPage.usernameOnExit.getText()).to.be.equal(text);
        chai.expect(AndroidWalletPage.pin).to.be.visible();

     }},

    clickLastTransaction: { value: function(text){
        this.lastTransaction.waitForVisible(6000);
        this.lastTransaction.setValue(text);
    }},

    changeTransactionName: { value: function(){
        this.transactionName.waitForVisible(6000);
        var name = this.transactionName.getText();
        var nameToCheck = this.transactionName.setValue(name + '1');
    }},

    clickSave: { value: function(){
        this.btnSave.waitForVisible(6000);
        this.btnSave.click();
    }},
    
    clickRequest: { value: function(){
        this.request.waitForVisible(99999);
        this.request.click();
    }},

    clickCopy: { value: function(){
        this.copy.waitForVisible(99999);
        this.copy.click();
    }},

    clickScan: { value: function(){
        this.scan.waitForVisible(6000);
        this.scan.click();
    }},

    clickAddress: { value: function(){
        this.address.waitForVisible(6000);
        this.address.click();
    }},

    clickPaste: { value: function(){
        this.paste.waitForVisible(6000);
        this.paste.click();
    }},

    clickArrow: { value: function(){
        this.upDownArrow.waitForVisible(6000);
        this.upDownArrow.click();
    }},
     
    setAmmount: { value: function(text){
        this.topText.waitForVisible(6000);
        this.topText.setValue(text);
    }},

    checkAmmount: { value: function(text){
        this.bottomText.waitForVisible(6000);
        chai.expect(AndroidWalletPage.bottomText.getText()).to.be.at.least(1);
    }},
/*
    slideToConfirm: { value: function(){
        this.slideBtn.waitForVisible(6000);
        browser.touchAction(this.slideBtn, [
        'press',
        { action: 'moveTo', x: 115, y: 843},
        'release'
       ]);
    }},
*/
    slideToConfirm: { value: function(){
        this.slideBtn.waitForVisible(6000);
        //browser.swipe('//android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[4]', 100 , 840 , 15);
        browser.swipe('//android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup[4]', 100 , 840 , 15);
    }},

    checkReceived: { value: function(text){
        this.received.waitForVisible(25000);
        chai.expect(AndroidWalletPage.received.getText()).to.include(text);

    }},
    





});

module.exports = AndroidWalletPage;
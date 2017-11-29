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
     firstWallet: createPageElement('//android.widget.ScrollView/android.view.View/android.view.View[1]/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.TextView'),
     secondWallet: createPageElement('//android.widget.ScrollView/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.TextView'),
     requestInsideWallet: createPageElement('//android.widget.TextView[@text="Request"]'),
     more: createPageElement('//android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.widget.ImageView'),
     logout: createPageElement('//android.widget.ScrollView/android.view.View/android.view.View[2]/android.view.View/android.view.View[3]'),
     usernameOnExit: createPageElement('//*[@text="'+ user +'"]'),
     pin: createPageElement('//android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]'),

     /* --- Request & Send objects --- */

     request: createPageElement('//android.view.View[1]/android.widget.TextView[@text="Request"]'),
     send: createPageElement('//*[@text="Send"]'),
     copy: createPageElement('//*[@text="Copy"]'),
     scan: createPageElement('//*[@text="Scan"]'),
     address: createPageElement('//android.widget.TextView[@text="Address"]'),
     paste: createPageElement('//android.view.View[2]/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.TextView'),
     upDownArrow: createPageElement('//android.view.View/android.widget.ScrollView/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View[1]/android.widget.TextView'),
     topText: createPageElement('//*[1]/android.widget.EditText'),
     bottomText: createPageElement('//android.view.View/android.view.View/android.view.View/android.view.View[5]/android.view.View[2]/android.view.View[2]/android.widget.TextView[2]'),
     currency: createPageElement('//*[@text="USD"]'),
     slideBtn: createPageElement('//android.view.View/android.view.View[3]/android.view.View/android.view.View[4]'),
     screen: createPageElement('//android.support.v4.view.ViewPager'),

     /* --- Transaction objects --- */

     lastTransaction: createPageElement('//android.widget.ScrollView/android.view.View/android.view.View[8]/android.view.View/android.view.View'),
     transactionName: createPageElement('//android.view.View[1]/android.widget.ScrollView/android.view.View/android.view.View/android.widget.EditText'),
     btnSave: createPageElement('//android.widget.TextView[@text="Save"]'),
     transactionSentMsg: createPageElement('//*[@text="Transaction Sent"]'),
     okTransaction: createPageElement('//android.widget.Button[@text="OK"]'),
     walletDropDown: createPageElement('//android.view.View[2]/android.view.View/android.view.View/android.widget.TextView[2]'),
     lastWallet: createPageElement('//*[@text="Last Wallet"]'),
     

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

    getWallets: { value: function(text, text2){
        this.firstWallet.waitForVisible(180000);
        chai.expect(AndroidWalletPage.firstWallet.getText()).to.include(text);
        chai.expect(AndroidWalletPage.secondWallet.getText()).to.include(text2);
        //assert.equal(len, '4');
    }},

    
    clickFirstWallet: { value: function(text){
        this.firstWallet.waitForVisible(5000);
        this.firstWallet.click();
    }},

    clickSecondWallet: { value: function(text){
        this.secondWallet.waitForVisible(25000);
        this.secondWallet.click();
    }},

    clickRequestInsideWallet: { value: function(text){
        this.requestInsideWallet.waitForVisible(25000);
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
        this.usernameOnExit.waitForVisible(30000);
        chai.expect(AndroidWalletPage.usernameOnExit.getText()).to.be.equal(text);
        chai.expect(AndroidWalletPage.pin).to.exist;
        this.pin.setValue('1234');

     }},

    clickLastTransaction: { value: function(text){
        this.lastTransaction.waitForVisible(6000);
        this.lastTransaction.click();
    }},

    changeTransactionName: { value: function(){
        this.transactionName.waitForVisible(6000);
        var name = this.transactionName.getText();
        this.transactionName.setValue(name + '1');

    }},

    clickSaveAndCheckName: { value: function(){
        var name = this.transactionName.getText();
        this.btnSave.click();
        this.lastTransaction.waitForVisible(6000);
        chai.expect(AndroidWalletPage.lastTransaction.getText()).to.be.equal(name);
    }},
/*
    verifyTransactionName:  { value: function(){
        this.lastTransaction.waitForVisible(6000);
        chai.expect(AndroidWalletPage.lastTransaction.getText()).to.be.equal(modifiedTransactionName);
    }},
  */  
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
        browser.pause(1000);
        this.upDownArrow.waitForVisible(6000);
        this.upDownArrow.click();
    }},
     
    setTopAmmount: { value: function(text){
        this.topText.waitForVisible(6000);
        this.topText.setValue(text);
    }},

    checkBottomAmmount: { value: function(){
        this.bottomText.waitForVisible(6000);
        chai.expect(AndroidWalletPage.bottomText.getText()).to.not.equal('0');
    }},


    clickSend : { value: function(){
        this.send.waitForVisible(25000);
        this.send.click();
    }},
    
    dropDownSelectLastWallet : { value: function(){
        this.walletDropDown.waitForVisible(25000);
        this.walletDropDown.click();
        this.lastWallet.waitForVisible(5000);
        this.lastWallet.click();

    }},
    
    checkCurrency: { value: function(text){
        this.currency.waitForVisible(25000);
        chai.expect(AndroidWalletPage.currency.getText()).to.include(text);

    }},


    slideToConfirm: { value: function(){
        this.slideBtn.waitForVisible(6000);
        //browser.swipe('//android.view.View/android.widget.ScrollView/android.view.View/android.view.View[3]/android.view.View/android.view.View[4]', 130, 783, 15 );
        browser.swipeLeft('//android.view.View/android.widget.ScrollView/android.view.View/android.view.View[3]/android.view.View/android.view.View[4]', 488 , 15);
    }},
  
    scrollDown: {value: function(){
       browser.swipeUp('//android.support.v4.view.ViewPager', 1150 , 15);
    } },

    scrollUp: {value: function(){
       browser.swipeDown('//android.support.v4.view.ViewPager', 1150 , 15);
    } },

    checkTransactionMsg: { value: function(text){
        this.transactionSentMsg.waitForVisible(25000);
        chai.expect(AndroidWalletPage.transactionSentMsg.getText()).to.include(text);

    }},

    clickOkTransaction : { value: function(){
        this.okTransaction.waitForVisible(25000);
        this.okTransaction.click();
    }},




});

module.exports = AndroidWalletPage;
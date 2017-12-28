var Page = require('../pageobjects/Page');
var chai = require('chai');
var user = 'testing111';

function createPageElement(selector) {
  return { get: function () { return browser.element(selector) } }
};
function createPageElements(selector) {
  return { get: function () { return browser.elements(selector) } }
};
var WalletPage = Object.create(Page, {
    
    /* --- Define elements --- */

     wallet: createPageElement('//XCUIElementTypeOther[@name="fullList"]'),
     alert: createPageElement('//XCUIElementTypeButton[@name="OK"]'),
     more: createPageElement('//XCUIElementTypeOther[@name="More"]'),
     logout: createPageElement('//XCUIElementTypeOther[@name="Logout"]'),
     usernameOnExit: createPageElement('//XCUIElementTypeOther[@name="' + user + '"]'),
     walletOther: createPageElement('//XCUIElementTypeScrollView/XCUIElementTypeOther'),
     REPLabel: createPageElement('//XCUIElementTypeOther[@name="REP 0"]'),
     WINGSLabel:createPageElement('//XCUIElementTypeOther[@name="WINGS 0"]'),

     request: createPageElement('//XCUIElementTypeOther[@name="Request"]'),
     copy: createPageElement('//XCUIElementTypeOther[@name="Copy"]'),
     
     scan: createPageElement('//XCUIElementTypeOther[@name="Scan"]'),
     address: createPageElement('//XCUIElementTypeOther[@name="  Address"]'),
     paste: createPageElement('//XCUIElementTypeOther[@name="Paste ethereum:0x6005bbfa5251b36a1399f4e407c2db250a64e9e5?amount=0"]'), //Needs modify to accept dynamic code.
     done: createPageElement('//XCUIElementTypeOther[@name="Done"]'), //Needs modify to accept dynamic code.


    /* --- Define page methods --- */


    getAmountWallets: { value: function(value) {
        this.walletOther.waitForVisible(15000);
        var len = this.walletOther.fullList.length;
        chai.expect(len).to.be.equal(value);
    } },
    verifyWallets: { value: function(value) {
        this.REPLabel.waitForVisible(20000);
        this.WINGSLabel.waitForVisible(3000);
        chai.expect(this.REPLabel.isVisible()).to.be.equal(true);
        chai.expect(this.WINGSLabel.isVisible()).to.be.equal(true);
    } },
     
     clickOk: { value: function(){
        this.alert.waitForVisible(60000);
        if(this.alert.isVisible() === true) {
            return this.alert.click();
        }
        else {
           console.log('No alert was present');
        }
     } },

     clickMore: { value: function(){
        this.more.waitForEnabled(15000);
        this.more.click();
     } },

     clickLogout: { value: function(){
        this.logout.waitForVisible(10000);
        this.logout.click();
     } },

     checkUserText: { value: function(text){
        this.usernameOnExit.waitForVisible(6000);
        chai.expect(WalletPage.usernameOnExit.getText()).to.be.equal(text);
     } },

     clickFirstWallet:{ value: function(text){
        this.firstWallet.waitForVisible(6000);
        this.firstWallet.click();
     } },

     clickRequest:{ value: function(text){
        this.request.waitForVisible(6000);
        this.request.click();
     } },

     clickCopy:{ value: function(text){
        this.copy.waitForVisible(6000);
        this.copy.click();
     } },

     clickScan:{ value: function(text){
        this.scan.waitForVisible(6000);
        this.scan.click();
     } },

     clickAddress:{ value: function(text){
        this.address.waitForVisible(6000);
        this.address.click();
     } },
     
     clickPaste:{ value: function(text){
        this.paste.waitForVisible(6000);
        this.paste.click();
     } },
});
module.exports = WalletPage;


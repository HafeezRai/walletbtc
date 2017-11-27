var chai = require('chai');

var AndroidLoginPage = require('../pageobjects/android_login_page');
var AndroidWalletPage = require('../pageobjects/android_wallet_page');
var username = 'autotest01';

describe('Login Pin', function () {
    it('should login with pin', function () {
        AndroidLoginPage.login();
        AndroidWalletPage.getWallets('My Ether', 'Last Wallet');
        browser.closeApp();
        browser.launch();
        AndroidWalletPage.checkUserTextAndPin(username); // It also tap the PIN to log in
        AndroidWalletPage.getWallets('My Ether', 'Last Wallet');
    });
});
 
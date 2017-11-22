var chai = require('chai');

var AndroidLoginPage = require('../pageobjects/android_login_page');
var AndroidWalletPage = require('../pageobjects/android_wallet_page');
var username = 'testing111';

describe('Login Pin', function () {
    it('should login with pin', function () {
        AndroidLoginPage.clickAlreadyHaveAccount();
        AndroidLoginPage.setUsername(username);
        AndroidLoginPage.setPassword('Testing111');  //Pin is 1111
        AndroidLoginPage.clickLogin();
        AndroidWalletPage.getAmountWallets('My Ether', 'Last Wallet');
        browser.closeApp();
        browser.launch();
        AndroidWalletPage.checkUserText(username);
        browser.keys('1111');
        AndroidWalletPage.getAmountWallets('My Ether', 'Last Wallet');
    });
});
 
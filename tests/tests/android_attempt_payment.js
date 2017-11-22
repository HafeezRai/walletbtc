var expect = require('chai').expect;

var AndroidLoginPage = require('../pageobjects/android_login_page');
var AndroidWalletPage = require('../pageobjects/android_wallet_page');

describe('Attempt Payment', function () {
    it('Should be able to create a transaction', function () {
        AndroidLoginPage.clickAlreadyHaveAccount();
        AndroidLoginPage.setUsername('edgy8');
        AndroidLoginPage.setPassword('Test123456');  //Pin is 1234
        AndroidLoginPage.clickLogin();
        AndroidWalletPage.getFirstWallet('My Ether');
        AndroidWalletPage.clickFirstWallet();
        AndroidWalletPage.clickRequestInsideWallet();
        AndroidWalletPage.setAmmount('1.23');
        AndroidWalletPage.checkAmmount();
        AndroidWalletPage.clickCopy();
        AndroidWalletPage.clickScan();
        AndroidWalletPage.clickAllow();
        AndroidWalletPage.clickAddress();
        AndroidWalletPage.clickPaste();
        AndroidWalletPage.clickArrow();
        AndroidWalletPage.setAmmount(0);
        AndroidWalletPage.slideToConfirm();
        AndroidWalletPage.checkReceived('Received');
    });
});
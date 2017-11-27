var expect = require('chai').expect;

var LoginPage = require('../pageobjects/login_page');
var WalletPage = require('../pageobjects/wallet_page');
var username = 'edgy8'//'testing111'
var password = 'Test123456'//'Testing111'

describe('Attempt Payment', function () {
    it('Should be able to create a transaction', function () {
        LoginPage.clickAlreadyHaveAccount();
        LoginPage.setUsername(username);
        LoginPage.setPassword(password);  //Pin is 1111
		LoginPage.clickLogin();
        WalletPage.clickOk();
        WalletPage.clickRequest();
        WalletPage.clickCopy();
        WalletPage.clickOk();
        WalletPage.clickScan();
        WalletPage.clickAddress();
    });
});
 
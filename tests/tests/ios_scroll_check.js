var expect = require('chai').expect;

var LoginPage = require('../pageobjects/login_page');
var WalletPage = require('../pageobjects/wallet_page');
var CreateAccountPage = require('../pageobjects/create_account_page');

describe('Login Pin', function () {
    it('should login with pin', function () {
        LoginPage.clickAlreadyHaveAccount();
        LoginPage.setUsername('testing111');
        LoginPage.setPassword('Testing111');  //Pin is 1111
		LoginPage.clickLogin();
        WalletPage.clickOk();
        WalletPage.clickFirstWallet();
        browser.pause(10000)
    });
});
 
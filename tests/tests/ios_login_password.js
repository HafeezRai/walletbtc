var chai = require('chai');
var assert = require('chai').assert;

var LoginPage = require('../pageobjects/login_page');
var WalletPage = require('../pageobjects/wallet_page');
describe('Login Password', function () {
    it('should login to the app', function () {
    	LoginPage.clickUnderstand();
        LoginPage.clickAlreadyHaveAccount();
        LoginPage.tapUsername('testing111');
        browser.pause(25000);
        LoginPage.setPassword('Testing111');  //Pin is 1111
        LoginPage.clickLogin();
        WalletPage.clickOk();
        //WalletPage.getAmountWallets(1); //Parametrized value indicates the ammount of wallets / Method not working
    	WalletPage.verifyWallets();
    });
});
 
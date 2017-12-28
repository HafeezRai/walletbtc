var expect = require('chai').expect;

var LoginPage = require('../pageobjects/login_page');
var WalletPage = require('../pageobjects/wallet_page');
describe('Login Pin', function () {
    it('should login with pin', function () {
        LoginPage.clickAlreadyHaveAccount();
        LoginPage.setUsername('testing111');
        LoginPage.setPassword('Testing111');  //Pin is 1111
        LoginPage.clickLogin();
        WalletPage.clickOk();
        browser.closeApp();
        browser.launch();
        browser.pause(6000);
        browser.keys('1111');
    });
});
 
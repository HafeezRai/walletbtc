var chai = require('chai');

var LoginPage = require('../pageobjects/login_page');
var WalletPage = require('../pageobjects/wallet_page');
var username = 'testing111'
var password = 'Testing111'
var pin = '1111'
describe('Log Out', function () {
    it('should log out and show pin screen', function () {
        LoginPage.clickAlreadyHaveAccount();
        LoginPage.setUsername('testing111');
        LoginPage.setPassword('Testing111');  
        LoginPage.clickLogin();
        WalletPage.clickOk();
        WalletPage.clickMore();
        WalletPage.clickLogout();
        WalletPage.checkUserText(username);
    });
});
 
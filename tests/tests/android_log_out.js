var chai = require('chai');

var AndroidLoginPage = require('../pageobjects/android_login_page');
var AndroidWalletPage = require('../pageobjects/android_wallet_page');
var user = require('../pageobjects/android_wallet_page').user;

describe('Log Out', function () {
    it('should log out and show pin screen', function () {
        AndroidLoginPage.clickAlreadyHaveAccount();
        AndroidLoginPage.setUsername(user);
        AndroidLoginPage.setPassword('Test123456');  //Pin is 1234
        AndroidLoginPage.clickLogin();
        AndroidWalletPage.clickAllow();
        AndroidWalletPage.clickMore();  
        AndroidWalletPage.clickLogout();
        AndroidWalletPage.checkUserTextAndPin(user);
    });
});
 


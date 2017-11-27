var chai = require('chai');

var AndroidLoginPage = require('../pageobjects/android_login_page');
var AndroidWalletPage = require('../pageobjects/android_wallet_page');
var username = 'autotest01';

describe('Log Out', function () {
    it('should log out and show pin screen', function () {
        AndroidLoginPage.login();
        AndroidWalletPage.clickMore();  
        AndroidWalletPage.clickLogout();
        AndroidWalletPage.checkUserTextAndPin(username);
    });
});
 


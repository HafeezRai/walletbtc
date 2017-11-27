var chai = require('chai');

var AndroidLoginPage = require('../pageobjects/android_login_page');
var AndroidWalletPage = require('../pageobjects/android_wallet_page')


describe('Login Password', function () {
    it('should log in', function () {
        AndroidLoginPage.login();
        AndroidWalletPage.getWallets('My Ether', 'Last Wallet');
    });
});
 

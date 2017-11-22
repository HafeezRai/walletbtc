var chai = require('chai');

var AndroidLoginPage = require('../pageobjects/android_login_page');
var AndroidWalletPage = require('../pageobjects/android_wallet_page')


describe('Login Password', function () {
    it('should log in', function () {
        AndroidLoginPage.clickUnderstand();
        AndroidLoginPage.clickAlreadyHaveAccount();
        AndroidLoginPage.setUsername('autotest01');
        browser.hideDeviceKeyboard();
        AndroidLoginPage.setPassword('Test123456');  //Pin is 1234
        browser.hideDeviceKeyboard();
        AndroidLoginPage.clickLogin();
        //AndroidWalletPage.clickAllow();  
        //browser.saveScreenshot('./snapshot.png');
        AndroidWalletPage.getWallets('My Ether', 'Last Wallet');


    });
});
 

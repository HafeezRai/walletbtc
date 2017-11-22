var chai = require('chai');

var AndroidLoginPage = require('../pageobjects/android_login_page');
var AndroidWalletPage = require('../pageobjects/android_wallet_page')


describe('Dummy test', function () {
    it('should reproduce the steps', function () {
        AndroidLoginPage.clickAlreadyHaveAccount();
        AndroidLoginPage.setUsername('testing111');
        browser.hideDeviceKeyboard();
        AndroidLoginPage.setPassword('Testing111');  //Pin is 1111
        browser.hideDeviceKeyboard();
        AndroidLoginPage.clickLogin();
        //AndroidWalletPage.clickAllow();  
        //browser.saveScreenshot('./snapshot.png');
        AndroidWalletPage.getAmountWallets(4);


    });
});
 

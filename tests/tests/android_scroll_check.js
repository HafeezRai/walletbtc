var chai = require('chai');

var AndroidLoginPage = require('../pageobjects/android_login_page');
var AndroidWalletPage = require('../pageobjects/android_wallet_page');
describe('Scroll Check and Request/Send', function () {
    it('should change name of last wallet transaction', function () {
        AndroidLoginPage.clickAlreadyHaveAccount();
        AndroidLoginPage.setUsername('edgy8');
        AndroidLoginPage.setPassword('Test123456');  //Pin is 1234
        AndroidLoginPage.clickLogin();
        AndroidWalletPage.clickAllow();
        AndroidWalletPage.clickFirstWallet();
        //browser.touchAction({ actions: 'tap', x: 500, y:1050 });
        browser.pause(3000);
        browser.scroll(1065);
        //browser.swipe([,1050][,1]); // Dummy 
        AndroidWalletPage.clickLastTransaction();
        browser.pause(6000);
        AndroidWalletPage.changeTransactionName();
        AndroidWalletPage.clickSave();
        //browser.scrollDown(); // Dummy 
        chai.expect(); // Dummy, validate transaction name
        //browser.scrollToTop(); // Dummy


        
    });
});
 
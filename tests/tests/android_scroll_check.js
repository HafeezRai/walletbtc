var chai = require('chai');

var AndroidLoginPage = require('../pageobjects/android_login_page');
var AndroidWalletPage = require('../pageobjects/android_wallet_page');

describe('Scroll Check and Request/Send', function () {
    it('should change name of last wallet transaction', function () {
        AndroidLoginPage.login();
        AndroidWalletPage.getWallets('My Ether', 'Last Wallet');
        AndroidWalletPage.clickSecondWallet();
        AndroidWalletPage.scrollDown();
        AndroidWalletPage.clickLastTransaction();
        AndroidWalletPage.changeTransactionName();
        AndroidWalletPage.clickSaveAndCheckName();
        AndroidWalletPage.scrollUp();
        browser.closeApp();
        browser.launch();
        AndroidWalletPage.checkUserTextAndPin();
        AndroidWalletPage.getWallets('My Ether', 'Last Wallet');
        AndroidWalletPage.clickSecondWallet();
        AndroidWalletPage.scrollDown();
        AndroidWalletPage.clickLastTransaction();
        chai.expect(AndroidWalletPage.transactionName.getText()).to.be.equal('Payee1');       
    });
});
 
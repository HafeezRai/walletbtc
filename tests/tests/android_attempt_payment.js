var expect = require('chai').expect;

var AndroidLoginPage = require('../pageobjects/android_login_page');
var AndroidWalletPage = require('../pageobjects/android_wallet_page');

describe('Attempt Payment', function () {
    it('Should be able to create a transaction', function () {
        AndroidLoginPage.login();
        AndroidWalletPage.getWallets('My Ether', 'Last Wallet');
        AndroidWalletPage.clickFirstWallet();
        AndroidWalletPage.clickRequestInsideWallet();
        AndroidWalletPage.setTopAmmount('1.23');
        AndroidWalletPage.checkBottomAmmount();
        AndroidWalletPage.clickCopy();
        AndroidWalletPage.clickSend();
        AndroidWalletPage.dropDownSelectLastWallet();
        AndroidWalletPage.clickAddress();
        AndroidWalletPage.clickPaste();
        AndroidWalletPage.clickArrow();
        AndroidWalletPage.setTopAmmount('0.10');
        AndroidWalletPage.checkCurrency('USD');
        AndroidWalletPage.slideToConfirm();
        AndroidWalletPage.checkTransactionMsg('Transaction Sent');
        AndroidWalletPage.clickOkTransaction();   
    });
});
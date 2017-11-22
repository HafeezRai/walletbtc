var expect = require('chai').expect;

var LoginPage = require('../pageobjects/login_page');
var WalletPage = require('../pageobjects/wallet_page');
var CreateAccountPage = require('../pageobjects/create_account_page');

describe('Login Pin', function () {
    it('should login with pin', function () {
        LoginPage.clickCreateAccount();
        CreateAccountPage.clickGetStarted();
        CreateAccountPage.setUsername("testing"+Date.now());
        CreateAccountPage.clickNext();
        CreateAccountPage.setPassword("Testing111");
        CreateAccountPage.clickNext();
        

    });
});
 
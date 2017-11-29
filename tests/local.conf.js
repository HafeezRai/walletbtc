
"use strict";

const path = require('path');
const APP_PATH = path.join('sauce-storage:edge.apk');
//const APP_PATH = path.join('/Users/administrator2/Downloads/app-debug.apk');
//const APP_PATH = path.join('/Users/administrator2/Downloads/edge.app');

exports.config = {
    port: 4723,

    // Note:
    // When you want to run a single test file for debug,
    // please use `.only()` method in mocha APIs.
    // Please search below page with '.only' word.
    //
    // https://mochajs.org/
    specs: [
        path.join(__dirname, './tests/android_login_password.js')
        //path.join(__dirname, './tests/android_attempt_payment.js')
        //path.join(__dirname, './tests/android_login_pin.js')
        //path.join(__dirname, './tests/android_scroll_check.js')
    ],

    // Note:
    // You can run specific suite
    suites: {
        testingSuite: [
            './tests/android_login_password.js',
            './tests/dummy.js'

        ]
    },

    exclude: [
    // 'path/to/excluded/files'
    ],

    // Note:
    // We need to execute E2E test script one by one because only one simplator
    // can exist in one local machine for iOS.
    maxInstances: 1,

    capabilities: [{

        appiumVersion: '1.6.5',
        autoAcceptAlerts: true,
        autoGrantPermissions: true,
       
        platformName: 'Android',
        platformVersion: '6.0',
        deviceName: 'Android Emulator',
        fullReset: 'false',
        noReset: 'true',
        /*
        platformName: 'iOS',
        platformVersion: '9.3',
        deviceName: 'iPhone Simulator',
        automationName: 'XCUITest',
        */
        browserName: '',
        app: APP_PATH, 
        appPackage: 'co.edgesecure.wallet',
        appActivity: 'co.edgesecure.wallet.MainActivity',    
        deviceOrientation: 'portrait',
        //connectionRetryTimeout: '250',
        //bundleId: 'co.edgesecure.wallet',
        
        
    }],

   
    sync: true,

    logLevel: 'verbose',

    coloredLogs: true,

    screenshotPath: './errorShots/',

    baseUrl: 'http://localhost',

    waitforTimeout: 9999999,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    framework: 'mocha',

    mochaOpts: {
        ui: 'bdd',
        fullTrace: true,
        timeout: 99999999
    },

    services: ['sauce'],
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    sauceConnect: true,

/*
   services: ['appium'], // on Windows based pc, services require to be [['appium']]
   appium: {
        args: {
            
            platformName: 'iOS',
            platformVersion: '10.3',
            deviceName: 'iPhone 6',
            automationName: 'XCUITest',
            
            platformName: 'Android',
            platformVersion: '5.0',
            deviceName: 'S6',
            appPackage: 'co.edgesecure.wallet',
            fullReset: 'false', 
            noReset: 'true',
            address: '127.0.0.1',
            commandTimeout: '7200',
            sessionOverride: true,
            debugLogSpacing: true,
            nativeInstrumentsLib: true,
            //isolateSimDevice: true,        
        }
    },

*/
    
    beforeTest: function () {
    },

    beforeHook: function () {
        
    },

    afterHook: function () {
       
    },

    afterTest: function (android_login_pin, android_login_password, android_attempt_payment, android_log_out) {
       browser.removeApp('co.edgesecure.wallet');
    },
    
    // After test is executed, run "allure generate allure-results  --clean  && allure open" to execute the allure report

    reporters: ['spec', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    },


    

};

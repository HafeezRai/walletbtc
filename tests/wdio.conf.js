"use strict";

const path = require('path');
//const APP_PATH = path.join('sauce-storage:edge.app');
const APP_PATH = path.join('sauce-storage:app-debug.apk');

exports.config = {
    //port: 4723,

    // Note:
    // When you want to run a single test file for debug,
    // please use `.only()` method in mocha APIs.
    // Please search below page with '.only' word.
    //
    // https://mochajs.org/
    specs: [
        path.join(__dirname, './tests/android_login_password.js')
        //path.join(__dirname, './tests/login_password.js')
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

        name:"Testing Edge app on Android",
        tags:["Login Password","Log Out","Login Pin"],
        appiumVersion: '1.6.5',
        autoAcceptAlerts: true,
        autoGrantPermissions: true,
       
        platformName: 'Android',
        platformVersion: '6.0',
        deviceName: 'Android Emulator',
       /*
        platformName: 'iOS',
        platformVersion: '9.3',
        deviceName: 'iPhone Simulator',
        */
        browserName: '',
        app: APP_PATH,        
        deviceOrientation: 'portrait',
        //connectionRetryTimeout: '250',
        //bundleId: 'co.edgesecure.wallet',
        
        
    }],

   
    sync: true,

    logLevel: 'data',

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
    sauceConnectOpts: {
        //verboseDebugging: true,
        //logfile:"./sc.log",
        //logger: console.log,
        dns: '8.8.8.8'
    },
    */

    /*
    appium: {
        args: {

            //platformName: 'iOS',
            //platformVersion: '10.3',
            //deviceName: 'iPhone 6',
            platformName: 'Android',
            platformVersion: '7.1.1',
            deviceName: 'GPXL',

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
    }
    

};

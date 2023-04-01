// const { Given, Then } = require("@wdio/cucumber-framework");

// const Homepage = require("../Pages/Homepage");
// const expect = require('chai').expect;
// const homepage = new Homepage();

// /*
// Q1:
// Scenario: Verify login fields are enabled
//     Given I am on facebook homepage
//     Then I verify login email field is enabled
//         And I verify login password field is enabled
//         And I verify login button field is enabled
// */

// Given(/^I am on facebook homepage$/, async function () {
//     await browser.url('/');
//     await browser.pause(5000);
// })

// Then(/^I verify login email field is enabled$/, async function(){
//     const isLoginEmailFldEnabled = await homepage.isLoginEmailFieldEnabled();
//     expect(isLoginEmailFldEnabled,'Login Email Field Is NOT Enabled').to.be.true;
// })

//     Then(/^I verify login password field is enabled$/, async function () {
//         const isLoginPwdFieldEnabled = await homepage.isLoginPasswordFieldEnalbed();
//         expect(isLoginPwdFieldEnabled, 'Login Password Field Is NOT Enabled').to.be.true;
//     })

//     Then(/^I verify login button field is enabled$/, async function () {
//         const isLoginBtnFieldEnabled = await homepage.isLoginButtonFieldEnabled();
//         expect(isLoginBtnFieldEnabled, 'Login Button Field Is NOT Enabled').to.be.true;

        
//     })
const { Given, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const Homepage = require("../Pages/Homepage");
const SignupPage = require("../Pages/SignupPage");

Given(/^I am on facebook homepage$/, async function () {
    await browser.url('/');
    await browser.pause(5000);
})

Given(/^I click on Create New Account button$/, async function () {
    const homepage = new Homepage();
    const signuppage = new SignupPage();
    await homepage.clickCreateNewAccountBtn();
    await signuppage.waitForSignUpFormDisplay();
    await browser.pause(2000);
})

Then(/^I verify current month is selected in month dropdown$/, async function () {
    const signuppage = new SignupPage();
    //Moment library code for current month
    const currentMonth = moment().format('MMM');

    //Facebook code for current month.
    const selectedMonth = await signuppage.getCurrentSelectedMonth();

expect(selectedMonth, 'Current Month Is NOT selected').to.equal(currentMonth);
});

Then(/^I verify current date is selected in day dropdown$/, async function () {
   const signuppage = new SignupPage();
    //Moment library code for current day
    const currentDay = moment().format('D');

    //Facebook code for current day
const selectedDay = await signuppage.getCurrentSelectedDay();
expect(selectedDay, 'Current Day Is NOT selected').to.equal(currentDay);
})

Then(/^I verify current year is selected in year dropdown$/, async function () {

    const signuppage = new SignupPage();
    //Moment library code for current 
    const currentDay = moment().format('YYYY');
    
    //Facebook code for current year
    const selectedYear = await signuppage.getCurrentSelectedYear();
    expect(selectedYear, 'Current Year Is NOT selected').to.equal(currentDay);

})
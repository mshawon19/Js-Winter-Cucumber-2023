const { Given, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const Homepage = require("../../Pages/Facebook/Homepage");
const SignupPage = require("../../Pages/Facebook/SignupPage");

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

Then(/^I verify firstname field is empty$/, async function () {
    const signuppage = new SignupPage();
    const isFirstNameEmpty = await signuppage.isFirstNameFieldEmpty();
    expect(isFirstNameEmpty, 'First Name Field Is NOT Empty').to.be.true;
})

Then(/^I verify lastname field is empty$/, async function() {
    const signuppage = new SignupPage();
    const isLastNameEmpty = await signuppage.isLastNameFieldEmpty();
    expect(isLastNameEmpty, 'Last Name Field Is NOT Empty').to.be.true;
})

Then(/^I verify phone number field is empty$/, async function() {
    const signuppage = new SignupPage();
    const isPhnEmailEmpty = await signuppage.isPhnEmailFieldEmpty();
    expect(isPhnEmailEmpty, 'Email or Phone Number Field Is NOT Empty').to.be.true;
})

Then(/^I verify current date is selected$/, async function() {
    const signuppage = new SignupPage();
    //Moment library code for current Date
    const currentMonth = moment().format('MMM');
    const currentDay = moment().format('D');
    const currentYear = moment().format('YYYY');

    //Facebook code for current Date
    const selectedMonth = await signuppage.getCurrentSelectedMonth();
    const selectedDay = await signuppage.getCurrentSelectedDay();
    const selectedYear = await signuppage.getCurrentSelectedYear();

    expect(selectedMonth, 'Current Month Is NOT selected').to.equal(currentMonth);
    expect(selectedDay, 'Current Day Is NOT selected').to.equal(currentDay);
    expect(selectedYear, 'Current Year Is NOT selected').to.equal(currentYear);
})

Then(/^I verify no gender is selected$/, async function() {
    const signuppage = new SignupPage();
    const isGenderNotSeleted = await signuppage.isGenderNotSelected();
    expect(isGenderNotSeleted, 'Gender IS Selected').to.be.true;
})


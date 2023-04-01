const { Then, Given } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HotelHomePage = require("../../Pages/Hotels/HotelHomePage");
const HotelRewardPage = require("../../Pages/Hotels/HotelRewardsPage");
const HotelSignupPage = require("../../Pages/Hotels/HotelSignupPage");

//step1
Given(/^I am on Hotels homepage$/, async function() {
    await browser.url('https://www.hotels.com/');
    await browser.pause(2000);
})

//step2
Then(/^I click on Learn about Hotels.com Rewards$/, async function() {
    const hotelhomepage = new HotelHomePage();
    const clickRwdsLink = await hotelhomepage.clickRewardsLink();
    await browser.pause(2000);
})
//step3
Then(/^I switch to Hotel Rewards handle$/, async function() {
    const hotelrewardpage = new HotelRewardPage();
    const switchingTORwds = await hotelrewardpage.switchingToRwdsHandle();
    await browser.pause(2000);
})
//step4
Then(/^I verify Hotels Rewards opened in a new window$/, async function() {
    const hotelrewardpage = new HotelRewardPage();
    const isMSgDisplayed = await hotelrewardpage.isJoinMsgDisplayed();
    expect(isMSgDisplayed, 'We are NOT on Hotels Rewards window').to.be.true;
})
//step5
Then(/^I click on Join Now$/, async function() {
    const hotelrewardpage = new HotelRewardPage();
    const hotelsignuppage = new HotelSignupPage();
    await hotelrewardpage.clickJoinNow();
    await hotelsignuppage.waitForSignUpHeader();
})
//step6
Then(/^I verify Form is blank$/, async function() {
    const hotelsignuppage = new HotelSignupPage();
    const isEmailEmpty = await hotelsignuppage.isEmailFieldEmpty();
    const isFirstNameEmpty = await hotelsignuppage.isFirstNameFieldEmpty();
    const isLastNameEmpty = await hotelsignuppage.isLastNameFieldEmpty();
    const isPswdEmpty = await hotelsignuppage.isPasswordFieldEmpty();

    expect(isEmailEmpty, 'Email Field Is NOT Empty').to.be.true;
    expect(isFirstNameEmpty, 'First Name Field Is Empty').to.be.true;
    expect(isLastNameEmpty, 'Last Name Field Is Empty').to.be.true;
    expect(isPswdEmpty, 'Password Field Is Empty').to.be.true;
})
//step7
Then(/^I verify Continue button is NOT enabled$/, async function() {
    const hotelsignuppage = new HotelSignupPage()
    const isContinueBttnDsiabled = await hotelsignuppage.isContinueBttnDisabled();
    expect(isContinueBttnDsiabled, 'Continue Button IS Enabled').to.be.equal('true');
})
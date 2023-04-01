class HotelHomePage {

//Locators of webElements on Homepage
rewardsLocator = 'a=Learn about Hotels.com Rewards';


//Functions to interact with webElements on Homepage
async clickRewardsLink() {
    const rwdsLink = await $(this.rewardsLocator);
    await rwdsLink.scrollIntoView(false);
    await rwdsLink.click();
};



}
module.exports = HotelHomePage;
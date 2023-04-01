class HotelRewardPage {

    //Locators of webElements on Homepage
    joinMsgLocator = 'h2=Join to get these benefits';
    joinNowBttnLocator = 'a=Join Now'

    //Functions to interact with webElements on Homepage
    
async switchingToRwdsHandle() {
    const connectedHandle = await browser.getWindowHandle();
    console.log(`connectedHandle -> ${connectedHandle}\n\n`);

    const allHandles = await browser.getWindowHandles();
    console.log(allHandles);
    for (const handle of allHandles) {
        await browser.switchToWindow(handle);
        const currentUrl = await browser.getUrl();
        console.log(`current url -> ${currentUrl}\n\n`);
        if (currentUrl.localeCompare('https://www.hotels.com/hotel-rewards-pillar/hotelscomrewards.html') === 0) {
          return handle;
    }
}
}

async isJoinMsgDisplayed() {
    const isMsgDisplayed = await $(this.joinMsgLocator).isDisplayed();
    return isMsgDisplayed;
}

async clickJoinNow() {
    const clickingJoinBttn = await $(this.joinNowBttnLocator).click();
}

}
module.exports = HotelRewardPage;
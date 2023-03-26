class SignupPage {



//Locators of webElements on 
signUpSubHeadingLocator = 'div*=quick and easy';
currentDOBMonth = '//select[@id="month"]//option[@selected]';
currentDOBDay = '//select[@id="day"]//option[@selected]';
currentDOBYear = '//select[@id="year"]//option[@selected]';



//Functions to interact with webElements
async waitForSignUpFormDisplay() {
await $(this.signUpSubHeadingLocator).waitForDisplayed();
}

async getCurrentSelectedMonth() {
return await $(this.currentDOBMonth).getText();
}

async getCurrentSelectedDay() {
return await $(this.currentDOBDay).getText();
}

async getCurrentSelectedYear() {
    return await $(this.currentDOBYear).getText();
    }
    



}
module.exports = SignupPage;


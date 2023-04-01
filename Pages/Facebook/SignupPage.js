class SignupPage {



//Locators of webElements on 
signUpSubHeadingLocator = 'div*=quick and easy';
currentDOBMonth = '//select[@id="month"]//option[@selected]';
currentDOBDay = '//select[@id="day"]//option[@selected]';
currentDOBYear = '//select[@id="year"]//option[@selected]';
fNameLocator = '//input[@name="firstname"]';
lNameLocator = '//input[@name="lastname"]';
phnEmailNumberLocator = '//input[@name="reg_email__"]';
femaleGenderBttnLocator = '//input[@value="1"]';
maleGenderBttnLocator = '//input[@value="2"]';
customGenderBttnLocator = '//input[@value="-1"]';


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
    
async isFirstNameFieldEmpty() {
    const fNameInput = $(this.fNameLocator);
    const fNameValue = await fNameInput.getAttribute('value');
    return fNameValue === '';
}

async isLastNameFieldEmpty() {
    const lNameValue = await $(this.lNameLocator).getAttribute('value');
    return lNameValue === '';
}

async isPhnEmailFieldEmpty() {
    const phnEmailValue = await $(this.phnEmailNumberLocator).getAttribute('value');
    return phnEmailValue === '';
}

async isGenderNotSelected() {
    const femaleBttnSelected = await $(this.femaleGenderBttnLocator).isSelected();
    const maleBttnSelected = await $(this.maleGenderBttnLocator).isSelected();
    const customBttnSelected = await $(this.customGenderBttnLocator).isSelected();
    return !(femaleBttnSelected || maleBttnSelected || customBttnSelected);
}

}
module.exports = SignupPage;


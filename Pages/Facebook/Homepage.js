class Homepage {

//Locators of webElements on Homepage

loginEmailFieldLocator = '#email';
loginPasswordFieldLocator = '#pass';
loginButtonFieldLocator = 'button=Log In'


createNewAccountBtnLocator = 'a=Create new account'


//Functions to interact with webElements on Homepage
async isLoginEmailFieldEnabled() {
    return await $(this.loginEmailFieldLocator).isEnabled();
  }

async isLoginPasswordFieldEnalbed() {
    return await $(this.loginPasswordFieldLocator).isEnabled()
}
async isLoginButtonFieldEnabled() {
    return await $(this.loginButtonFieldLocator).isEnabled()
}

async clickCreateNewAccountBtn() {
    await $(this.createNewAccountBtnLocator).click();
}

/*
    //Locators of webElements on 
signUpSubHeadingLocator = "div='It's quick and easy."



    //Functions to interact with webElements
async waitForSignUpFormDisplay() {
    await $(this.signUpSubHeadingLocator).waitForDisplayed();
}
*/


}
module.exports = Homepage;


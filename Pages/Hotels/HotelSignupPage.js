class HotelSignupPage{

    //Locators of webElements on sign up page
    signUpHeader = 'h1=Create an account';
    emailLocator = '#signupFormEmailInput';
    firstNameLocator = '#signupFormFirstNameInput';
    lastNameLocator = '#signupFormLastNameInput';
    passwordLocator = '#signupFormPasswordInput';
    disabledContinueBttnLocator = '//button[contains(text(),"Continue")]';

    //Functions to interact with webElements on sign up page

async waitForSignUpHeader() {
await $(this.signUpHeader).waitForExist();
}

async isEmailFieldEmpty() {
    const emailFieldInput = await $(this.emailLocator).getValue();
    return emailFieldInput === '';
}

async isFirstNameFieldEmpty() {
    const firstNameFieldInput = await $(this.firstNameLocator).getValue();
    return firstNameFieldInput === '';
}

async isLastNameFieldEmpty() {
    const lastNameFieldInput = await $(this.lastNameLocator).getValue();
    return lastNameFieldInput === '';
}

async isPasswordFieldEmpty() {
    const passwordFieldInput = await $(this.passwordLocator).getValue();
    return passwordFieldInput === '';
}

async isContinueBttnDisabled() {
    const continueBttnNotEnabled = await $(this.disabledContinueBttnLocator).getAttribute('disabled');
    return continueBttnNotEnabled;
}

}
module.exports = HotelSignupPage;

// const Page = require('./page')

class LoginPage{
    //definisikan locator dari element
    get usernameInput(){
        return $('#user-name'); //locator field username
    }
    get passwordInput(){
        return $('#password'); //locator field password
    }
    get loginButton(){
       return $('#login-button') //locator button login
    }
    get errorMsg(){
        return $('//*[@data-test="error"]'); // locator error message
    }

    //definisikan action yang dilakukan pada element tsb
    async login(username,password){
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click();
    }
    async assertErrorMessage(ExpectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(ExpectedErrorMessage);
    }
    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}
module.exports = new LoginPage();
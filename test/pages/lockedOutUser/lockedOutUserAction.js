const lockedOutUserLocator = require("./lockedOutUserLocator");

class LockedOutUserLoginActions{
    
    async clickOnUserName(lockedoutusername){
        await lockedOutUserLocator.usernameField.setValue(lockedoutusername);
    }

    async clickOnUserpassword(password){
        await lockedOutUserLocator.passwordField.setValue(password);

    }

    async clickOnLoginButton(){
        await lockedOutUserLocator.loginButtonField.click();

    }

    async geterrorMessage(){
        return await lockedOutUserLocator.errorMessage.getText();   
    }
}

module.exports = new LockedOutUserLoginActions();
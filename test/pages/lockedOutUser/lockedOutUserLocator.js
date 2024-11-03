class LockedOutUserLocator{
    get usernameField(){
        return $("//input[@name='user-name']");
    }

    get passwordField(){
        return $("//input[@name='password']");
    }

    get loginButtonField(){
        return $("//input[@name='login-button']");
    }

    get errorMessage(){
       return $("//div[@class='error-message-container error']");
    }
}

module.exports = new LockedOutUserLocator();
const lockedOutUserAction = require ("../pages/lockedOutUser/lockedOutUserAction");


//const lockedOutuserActions = require ("../pageobjects/lockedOutUser/lockedOutuserAction")

var lousername = "locked_out_user";
var password = "secret_sauce";

describe("Successfull Locked Out User Journey", () => {
    it("Should verify locked out user error message", async () => {
        await lockedOutUserAction.clickOnUserName(lousername);
        await browser.pause(3000);
        await lockedOutUserAction.clickOnUserpassword(password);
        await browser.pause(3000);
        await lockedOutUserAction.clickOnLoginButton();
        await browser.pause(2000);

        const initialErrorMessage = "Epic sadface: Sorry, this user has been locked out.";
        const actualErrorMessge = await lockedOutUserAction.geterrorMessage();
        expect(actualErrorMessge).toContain(initialErrorMessage);
        await browser.refresh();
        await browser.pause(2000);
        
    }) 
})

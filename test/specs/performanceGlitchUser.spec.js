const performGlitchUserActions = require("../pages/performanceGlitchUser/performanceGUserAction");
const username = "performance_glitch_user";
const password = "secret_sauce";
let count = 1;
let percentageOfTax = 0.08;
let productIntoTheInventory = [
    "Test.allTheThings() T-Shirt (Red)"
];
describe("Performance Glitch User Purchase Flow Test", () => {
  it("Successfully complete login for Performanc Glitch User", async () => {
    await performGlitchUserActions.login(username, password);
  });
  it("Verify successfully Reset App and Close the menu", async () => {
    // hamburger Menue
    await performGlitchUserActions.clickOnHamburgerMenue();
    // Reset App State
    await performGlitchUserActions.resetAppState();
    //close menue
    await performGlitchUserActions.clickOnCloseMenue();
  });

  it('Confirm the purchase flow for performance glitch user', async () => {
    await performGlitchUserActions.clickOnNameFilterField();
    await browser.pause(3000);
    await performGlitchUserActions.selectNamefromFilterFiled();
    await browser.pause(3000);
    await performGlitchUserActions.clickAddtoCartFromList(count);
    await browser.pause(3000);
    await performGlitchUserActions.clickOnAddtoCartShopping();
    await browser.pause(3000);
    await performGlitchUserActions.clickOnCheckoutbutton();

    await performGlitchUserActions.clickOnCheckoutInfo("Nipa", "Monalisa", 1219);
    await browser.pause(3000);

    await performGlitchUserActions.clickContinue();

  });

  it('Successfully verify the prouct item name and total amount', async () => {

    let name = await performGlitchUserActions.getProductNameFromInventory(
      count
    );
    expect(name).toEqual(productIntoTheInventory);
    let price = await performGlitchUserActions.getProductPriceFromInventory(
      count
    );
    let calculatedTotal = 0;
    for (let i = 0; i < price.length; i++) {
      calculatedTotal += price[i];
    }

    const itemPrice =
      await performGlitchUserActions.getTotalItemPriceWithoutTax();
    expect(calculatedTotal).toEqual(itemPrice);

    //
    const expectedTotal = calculatedTotal + calculatedTotal * percentageOfTax;
    const totalPricewithTax =
      await performGlitchUserActions.getTotalItemPriceWithTax();
    expect(expectedTotal).toBeCloseTo(totalPricewithTax);

  });

  it('Verify finish the purchase journey and the successful order message', async () => {
    await performGlitchUserActions.clickOnFinish();
    await browser.pause(3000);

    const initiaiSuccessfulMessage = "Thank you for your order!";
    const actualSuccessfulMessge =
      await performGlitchUserActions.getSuccessfulMessage();

    expect(actualSuccessfulMessge).toEqual(initiaiSuccessfulMessage);
    const orderDetailsMessage =
      await performGlitchUserActions.getOrderDetailsMessage();
    const actualDetailsMesage = "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
    expect(orderDetailsMessage).toEqual(actualDetailsMesage);

  });

  it('For performance glitch user verify Reset the App State again and log out', async () => { 
    await performGlitchUserActions.clickOnHamburgerMenue();
    await performGlitchUserActions.resetAppState();
    await browser.pause(3000);
    await performGlitchUserActions.clickOnLogout();
    await browser.pause(3000);
  });
});
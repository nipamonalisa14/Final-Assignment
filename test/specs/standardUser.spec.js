const standardUserActions = require('../pages/standardUser/standardUserAction');
//const utility = require("../utilities/utility");
const username = 'standard_user';
const password = 'secret_sauce';

const count = 3;
let percentageOfTax = 0.08;
let productIntoTheInventory = [
    "Sauce Labs Backpack",
    "Sauce Labs Bike Light",
    "Sauce Labs Bolt T-Shirt",
];

describe('Standard User Test', () => {
    it('Verify successfully login for standard_user', async () => {
        await standardUserActions.login(username, password);
    });
    it('Verify successfully Reset App and Close the menu', async () => {

        await standardUserActions.clickOnHamburgerMenue();

        await standardUserActions.resetAppState();

        await standardUserActions.clickOnCloseMenue();
        await browser.pause(3000);
    });

    it('Verify successfully three Products add to card and go to the checkout page', async () => {
        await standardUserActions.addItemsToCart(3);

        await standardUserActions.clickOnShopingCart();

        await standardUserActions.clickOnCheckout();

        await standardUserActions.clickOnCheckoutInfo('Nipa', 'Monalisa', 8899);

        await standardUserActions.clickOnContinue();

    });

    it('Successfully verify the proucts name and total amount', async () => {
        var productnames = await standardUserActions.productNameFromInventory(count);
        expect(productnames).toEqual(productIntoTheInventory);

        var price = await standardUserActions.productPriceFromInventory(count);
        //   console.log(Spec file price : ${typeof price});
        //    await browser.pause(2000);

        let calculatedTotal = 0;
        for (let i = 0; i < price.length; i++) {
            calculatedTotal += price[i];
        }
        //console.log(calculatedTotal);
        const itemPrice = await standardUserActions.TotalPriceWithoutTax();
        // console.log(Item Price: ${typeof itemPrice});
        expect(calculatedTotal).toEqual(itemPrice);

        //
        const expectedTotal = calculatedTotal + (calculatedTotal * percentageOfTax);
        const totalPricewithTax = await standardUserActions.totalPriceWithTax();
        expect(expectedTotal).toBeCloseTo(totalPricewithTax);

    });

    it('Verify finish the purchase journey and the successful order message', async () => {
        await standardUserActions.clickOnFinishButton();
        //geting Thanks successful message
        const successfulMsg = await standardUserActions.getSuccessfulMessage();
        console.log(successfulMsg)
        const actualMessage = 'Thank you for your order!';
        expect(successfulMsg).toEqual(actualMessage);

        const orderMessage = await standardUserActions.getOrderDetailsMessage();
        const actualDetailMesage = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!';
        expect(orderMessage).toEqual(actualDetailMesage);

    });

    it('For standard user verify Reset the App State again and log out', async () => {

        await standardUserActions.clickOnHamburgerMenue();
        await standardUserActions.resetAppState();
        await standardUserActions.clickOnlogout();
        //await browser.pause(3000);
    });

})
const cartPage = require('../pageobjects/cart.page');
const checkoutPage = require('../pageobjects/checkout.page');
const finalcheckoutPage = require('../pageobjects/finalcheckout.page');
const LoginPage = require('../pageobjects/login.page');
const productsPage = require('../pageobjects/products.page');
const expect = require("chai").expect;


describe('Sause labs cart selection',()=>{
    it("login with demo credentials",async()=>{
        await LoginPage.open("https://www.saucedemo.com/");
        await LoginPage.login("standard_user","secret_sauce");

    })
    it("Select any item from the cart",async()=>{
        await productsPage.AddProductToCart("Sauce Labs Backpack");
        await productsPage.navigateToCart();
    })
    it("Navigate to cart and verify the price",async()=>{
        await cartPage.validateinventorypriceText("$29.99");
        //await expect(cartPage.inventorypriceText).to.equal("$29.99");
    })
    it("click checkout, enter sample details and continue",async()=>{
        await cartPage.checkOutProduct();
        await checkoutPage.EnterDetails("sauce","labs","534350");
        await checkoutPage.continueCheckout();
    })
    it("Verify the item price in checkout page and click finish",async()=>{
        await finalcheckoutPage.validateinventorypriceText("$29.99");
        //await expect(finalcheckoutPage.inventorypriceText).to.equal("$29.99");

        await finalcheckoutPage.finishCheckout();
    })

})

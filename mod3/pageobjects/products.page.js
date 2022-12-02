const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Products extends Page {
    get shoppingcartLink () {
        return $("//a[@class='shopping_cart_link']");
    }
    async AddProductToCart (product) {
        let button = await $("//div[text()='"+product+"']//ancestor::div[@class='inventory_item']//button");
        await button.click();
        await $("//div[text()='Sauce Labs Backpack']//ancestor::div[@class='inventory_item']//button[text()='Remove']").waitForDisplayed({timeout:20000})
    }
    async navigateToCart(){
        await this.shoppingcartLink.click();
    }
}

module.exports = new Products();
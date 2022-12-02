const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Cart extends Page {
    
    get checkout(){
        return $("#checkout")
    }
    async validateinventorypriceText(price){
        let text = await $("//div[@class='inventory_item_price']").getText()
        if(price == text)
            await console.log("price"+ " "+text);
        else
            throw "price not equal to "+text
    }
    get inventorypriceText(){
        return $("//div[@class='inventory_item_price']").getText()
    }
    async getInventoryPrice(product) {
        let price =  await $("//div[text()='"+product+"']/ancestor::*[@class='cart_item_label']//div[contains(@class,'inventory_item_price')]");
        return price;
    }
    async navigateToCart(){
        await this.shoppingcartLink.click();
    }
    async checkOutProduct(){
        await this.checkout.click();
    }
}

module.exports = new Cart();
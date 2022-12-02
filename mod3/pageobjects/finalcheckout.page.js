const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FinalCheckout extends Page {
    
    async validateinventorypriceText(price){
        let text = await $("//div[@class='inventory_item_price']").getText()
        if(price == text)
            console.log("price"+ " "+text);
        else
            throw "price not equal to "+text
    }
    get inventorypriceText(){
        return $("//div[@class='inventory_item_price']").getText()
    }
    get finish(){
        return $('#finish')
    }
    async finishCheckout(){
        await this.finish.click();
    }
}

module.exports = new FinalCheckout();
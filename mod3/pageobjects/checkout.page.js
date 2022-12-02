const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOut extends Page {
    
    get firstName(){
        return $('#first-name')
    }
    get lastName(){
        return $('#last-name')
    }
    get postalCode(){
        return $('#postal-code')
    }
    get continue(){
        return $("#continue")
    }
    async EnterDetails (firstname,lastname,postalcode) {
        await this.firstName.setValue(firstname);
        await this.lastName.setValue(lastname);
        await this.postalCode.setValue(postalcode)
    }
    async continueCheckout(){
        await this.continue.click();
    }
}

module.exports = new CheckOut();
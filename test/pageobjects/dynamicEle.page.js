const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicElementsPage extends Page {
    get startButton () {
        return $('button=Start');
    }
    get HelloWorldText(){
        return $('h4=Hello World!')
    }

    async clickStart () {
        await this.startButton.waitForDisplayed({ timeout:20000});
        await this.startButton.click();
        await this.HelloWorldText.waitForDisplayed({timeout:20000})
    }
}

module.exports = new DynamicElementsPage();
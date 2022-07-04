const expectChai = require('chai').expect;

class ResultsPage {

    get resultsQuantity () {
        return $('#result-stats');
    }

    async quantity() {
        let result = await this.resultsQuantity.getText();
        const match = result.match('[^a-zA-Z]+');
        return match[0].split('.').join('');
    }

    async verifyMoreQuantity(quantity) {
        let number = BigInt(await this.quantity());
        expectChai(Number(number)).to.be.greaterThan(Number(quantity))
       // await this.closeSession();
    }

    async verifyLessQuantity(quantity) {
        let number = BigInt(await this.quantity());
        expectChai(Number(number)).to.be.lessThan(Number(quantity));
    }

    async closeSession(){
        await browser.close();
    }

}

export default new ResultsPage();

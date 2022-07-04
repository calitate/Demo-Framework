import Page from './page';

class BrowserPage extends Page {

    get searchInput () {
        return $('input[name="q"]');
    }

    get btnSubmit () {
        return $('center input[type="submit"][value*="Google"]');
    }

    get rejectCookieBtn () {
        return $('#W0wltc');
    }

    async rejectCookies () {
        await this.rejectCookieBtn.waitForClickable({ timeout: 3000 });
        await this.rejectCookieBtn.click();
    }

    async search (value) {
        await this.searchInput.waitForClickable({ timeout: 3000 });
        await this.searchInput.setValue(value);
        await this.btnSubmit.waitForClickable({ timeout: 3000 });
        await this.btnSubmit.click();
    }

    open () {
        return super.open('google.es','');
    }
}

export default new BrowserPage();

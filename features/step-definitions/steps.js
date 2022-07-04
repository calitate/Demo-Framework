import { Given, When, Then } from '@wdio/cucumber-framework';

import browserPage from '../pages/browserPage';
import resultsPage from '../pages/resultsPage';

const pages = {
    google: browserPage
};

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I reject cookies$/, async () => {
    await browserPage.rejectCookies();
});

When(/^I search "([^"]*)"$/, async (value) => {
    await browserPage.search(value)
});

Then(/^I see "([^"]*)" than "([^"]*)" results$/, async (quantity, number) => {

    switch (quantity.toLowerCase()) {
        case 'more':
            await resultsPage.verifyMoreQuantity(number);
            break;
        case 'less':
            await resultsPage.verifyLessQuantity(number);
            break;
        default:
            throw new Error(`Unexpected quantity: ${quantity}`);
    }
});

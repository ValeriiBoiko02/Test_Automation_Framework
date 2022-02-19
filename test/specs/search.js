import SearchPage from '../pages/search.page';
import {waitForTextChange} from "../utilities/helper";
import resourses from '../resources';
import allureReporter from '@wdio/allure-reporter'

describe('ebay products search', () => {
    it('it should open the url and verify the title', () => {
        SearchPage.open()
        expect(browser).toHaveTitle(resourses.homeTitle);
    })

    it('it should it should search for a product and verify the search text value', () => {
        allureReporter.addSeverity('Critical')
        SearchPage.searchInput.addValue('laptop');
        SearchPage.searchButton.click()

        expect(SearchPage.searchInput).toHaveValue('laptop')
    })

    it('should wait until the category text will be changed', function () {
        allureReporter.addFeature('search category feature')
        waitForTextChange(SearchPage.category, resourses.categoryNameAfterSearch, 3000)
    });
})
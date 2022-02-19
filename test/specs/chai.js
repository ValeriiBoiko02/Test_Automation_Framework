import {expect as chaiExpect} from "chai";

xdescribe('watched page banner', () => {
    it('should show the banner container', () => {
        browser.url('https://www.ebay.com/b/Wristwatches/31387/bn_2408451')

        const promoBanner = $("section.title-banner")
        expect(promoBanner).toBeDisplayed()
    })

    it('should show the banner title', () => {
        const bannerTitle = $('.title-banner__title')
        const infoTitleText = bannerTitle.getText()

        expect(bannerTitle).toHaveTextContaining('for a New Wristwatch?')
        chaiExpect(infoTitleText).to.not.be.empty;
    })

    it('should click on shop button and verify a new url', () => {
        const watchButton = $('.b-visualnav__tile')
        watchButton.click()

        const url = browser.getUrl()
        chaiExpect(url).to.include('Casio-Watches')
        expect(browser).toHaveUrl('https://www.ebay.com/b/Casio-Watches/31387/bn_2973204')
    })
})
import {expect as chaiExpect} from "chai";
import WatchPage from '../pages/watches.page';
import {waitAndClick} from "../utilities/helper";
import resourses from '../resources';

describe('watched page banner',()=>{
    before(()=>{
        WatchPage.open()
        WatchPage.fashionLink.moveTo();
        waitAndClick(WatchPage.watchesLink, 2000)
    })

    it('should verify our watches list', function () {
        const watchesList = WatchPage.getWatchesCategoryListText()
        chaiExpect(watchesList).to.deep.equal(resourses.watchesCategoryList)
    });

    it('should show the banner container', ()=>{
         expect(WatchPage.promoBanner).toBeDisplayed()
    })

    it('should show the banner title',  () =>{
         expect(WatchPage.bannerTitle).toHaveTextContaining('for a New Wristwatch?')
    })

    it('should click on shop button and verify a new url', ()=>{
        WatchPage.watchButton.click()

        const url =  browser.getUrl()
        chaiExpect(url).to.include('Casio-Watches')
    })
})
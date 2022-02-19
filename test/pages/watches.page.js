import Page from "./page";

class WatchesPage extends Page {
    get promoBanner() {
        return $("section.title-banner")
    }

    get bannerTitle() {
        return $('.title-banner__title')
    }

    get watchButton() {
        return $('.b-visualnav__tile')
    }

    get watchesCategoryList() {
        return $$('section[id="s0-16-12_2-0-1[0]-0-0"] ul li')
    }
    get fashionLink(){
        return $$('.hl-cat-nav__js-tab a[href*=Fashion]')[0];
    }
    get watchesLink(){
        return $$('.hl-cat-nav__js-link')[19]
    }

    open() {
        super.open('/');
    }

    getWatchesCategoryListText() {
        const watchesList = [];
        this.watchesCategoryList.map(el=>{
            watchesList.push(el.getText())
        })
        return watchesList
    }

}

export default new WatchesPage()
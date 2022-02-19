import Page from "./page";

class SearchPage extends Page{
    get searchInput(){
        return $('#gh-ac');
    }
    get searchButton(){
        return $('#gh-btn');
    }

    open(){
        super.open('/')
    }
    get category(){
        return $('#gh-cat option[value="0"]')
    }
}

export default new SearchPage();
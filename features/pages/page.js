export default class Page {
    /**
    * Opens a sub page of the page
    * @param path of the sub page (e.x. /path/to/page.html)
    */
    open (site,path) {
        return browser.url(`https://${site}/${path}`)
    }
}

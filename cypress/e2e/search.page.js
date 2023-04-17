const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCHBOX = '#searchTerm'

class SearchPage {
    static visit() {
        cy.visit(URL)
    };

    static fillSearchBox(word) {
        cy.get(SEARCHBOX).type(word).type('{enter}')
    };
}

export default SearchPage; 
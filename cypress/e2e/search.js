import SearchPage from './search.page';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')


Given('I open homepage', () => {
    SearchPage.visit();
});

When('I enter search "online"', () => {
    SearchPage.fillSearchBox('online');
});

Then('I should see search result page', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
    cy.get('a[href]')
        .should('have.attr', 'href')
        .and('contain', '/')
});



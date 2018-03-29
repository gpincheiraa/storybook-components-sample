const url = '/';

/*
    https://medium.com/@mtiller/testing-react-components-using-storybook-and-cypress-1689a27f55aa
    http://blog.xebia.com/visual-regression-testing-cypress/
*/
given('I open Test page', () => {
  cy.visit(url)
});

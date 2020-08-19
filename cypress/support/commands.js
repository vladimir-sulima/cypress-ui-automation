// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// // Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const doNotClearLocalStorage = (_keys) => {
  cy.log("To not clear local storage");
};
// By default Cypress clears local storage between every spec. We disable Cypress local storage clearing function, so that we can test local storage usage
// TODO after Cypress adds support for lifecycle events use them instead to do it: https://github.com/cypress-io/cypress/issues/686
Cypress.LocalStorage.clear = doNotClearLocalStorage;
localStorage.clear();
// We need own version to manually clear local storage in tests, because above one disables also cy.clearLocalStorage
Cypress.Commands.add("doClearLocalStorage", () => {
  cy.log("Clear Storage");
  localStorage.clear();
});

// const doClearLocalStorage = () => {
//     localStorage.clear()
// }

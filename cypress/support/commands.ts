/// <reference types="cypress" />

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
    }
  }
}
/* eslint-enable @typescript-eslint/no-namespace */

export {};

Cypress.Commands.add("login", () => {
  cy.visit("/auth/login");
  cy.get('input[name="email"]').type("john@doe.com", { force: true });
  cy.get('input[name="password"]').type("password123", { force: true });
  cy.get('button[type="submit"]').click();
  cy.url().should("include", "/dashboard");
});

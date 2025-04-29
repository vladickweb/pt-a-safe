describe("Users Page", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/users");
  });

  it("should display users table with data", () => {
    cy.get("[data-testid='users-table']").should("exist");
    cy.get("[data-testid='users-table']").should("not.be.empty");
  });

  it("should show loading state", () => {
    cy.visit("/users");
    cy.get("[data-testid='loading-spinner']").should("be.visible");
  });
});

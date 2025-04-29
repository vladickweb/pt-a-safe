describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/auth/login");
  });

  it("should render login form", () => {
    cy.get("form").should("exist");
    cy.get('input[name="email"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('button[type="submit"]').should("exist");
  });

  it("should show error with incorrect credentials", () => {
    cy.get('input[name="email"]').type("wrong@email.com");
    cy.get('input[name="password"]').type("wrongpassword");
    cy.get('button[type="submit"]').click();
    cy.get('[data-testid="login-page-form-external-error"]').should(
      "be.visible",
    );
  });

  it("should redirect to dashboard with correct credentials", () => {
    cy.get('input[name="email"]').type("john@doe.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });
});

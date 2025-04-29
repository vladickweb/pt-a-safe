describe("Dashboard Page", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/dashboard");
  });

  it("should display SummaryCard with data", () => {
    cy.get("[data-testid='summary-card']")
      .should("exist")
      .and("be.visible")
      .first()
      .within(() => {
        cy.get("[data-testid='summary-card-title']").should("exist");
        cy.get("[data-testid='summary-card-content']").should("exist");
      });
  });

  it("should display ChartCard with data", () => {
    cy.get("[data-testid='chart-card']")
      .should("exist")
      .and("be.visible")
      .first()
      .within(() => {
        cy.get("[data-testid='chart-card-title']").should("exist");
        cy.get("[data-testid='chart-card-content']").should("exist");
      });
  });

  it("should show SkeletonCard while loading", () => {
    cy.visit("/dashboard");

    cy.get("[data-testid='skeleton-card']").should("be.visible");
    cy.get("[data-testid='skeleton-card']").should("not.exist");
  });
});

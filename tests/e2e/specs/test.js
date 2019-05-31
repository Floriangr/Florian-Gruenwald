beforeEach(function() {
  cy.visit("/");
});

describe("Entire website", () => {
  it("Tests the footer links", () => {
    cy.get(
      '[href="https://www.linkedin.com/in/florian-gruenwald-4057637a/"]'
    ).contains("LinkedIn");
    cy.get('[href="https://github.com/Floriangr"]').contains("Github");
  });

  it("Visits the app root url", () => {
    cy.get("[data-cy=contact]").click();
  });
});

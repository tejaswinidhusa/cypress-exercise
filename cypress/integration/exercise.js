/// <reference types="cypress" />

// This spec contains tests of index page

describe("verify index page", () => {
  beforeEach(() => {
    //To start tests of index page, first we want to load the index page
    cy.visit("http://localhost:3000/");
  });

  it("should have app logo by default", () => {
    //This test verifies the default app logo of index page
    cy.get(".App-logo")
      .should("be.visible") //app logo should be visible
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0); //Width of the logo should be greater than zero
      });
  });
  it("should have edit index page text", () => {
    //This test verifies the page should have given edit text
    cy.get("p").should("have.text", "Edit src/App.js and save to reload.");
  });

  it("should have hyperlink with text", () => {
    //This test verifies the given hyperlink on index page
    cy.get("a:visible")
      .contains("Learn React")
      .should("have.attr", "href", "https://reactjs.org");
  });

  it("hyperlink should be working", () => {
    //This test verifies the functionality of hyperlink
    cy.get("a:visible").invoke("removeAttr", "target").click(); //click action verified
    cy.url().should("include", "reactjs.org"); //url verified
  });
});

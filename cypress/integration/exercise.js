/// <reference types="cypress" />

// This spec contains tests of index page

describe("verify index page", () => {
  beforeEach(() => {
    //To start tests of index page, first we want to load the index page
    cy.visit("http://localhost:3000/");
  });
});

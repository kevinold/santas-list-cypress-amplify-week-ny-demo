// type definitions for Cypress object "cy"
/// <reference types="cypress" />

const kids = ["Jackson", "Lincoln", "Kellon"];

const toys = ["Train", "Bike", "Basketball", "Game", "Cars"];

describe("App", function() {
  beforeEach(function() {
    cy.loginToCognito(
      Cypress.env("COGNITO_USERNAME"),
      Cypress.env("COGNITO_PASSWORD")
    );
  });

  it("renders an add kid form", function() {
    cy.getTest("kid-name-input");
  });

  it("renders an kids column", function() {
    cy.getTest("kid-list-header");
  });

  it("renders a gift list column", function() {
    cy.getTest("gift-list-header");
  });

  it("adds a list of kids", function() {
    kids.forEach(kid => {
      cy.getTest("kid-name-input").type(kid);
      cy.getTest("add-kid-btn").click();

      cy.getTest("kid-list")
        .children()
        .should("contain", kid);
    });
  });

  context("Kid", function() {
    it("adds gifts to the list of gifts", function() {
      cy.getTest("kid-list")
        .children()
        .first()
        .click()
        .should("have.class", "bg-gray-200");

      toys.forEach(toy => {
        cy.getTest("add-gift").type(toy);
        cy.getTest("add-gift-btn").click();

        cy.getTest("gift-list")
          .children()
          .should("contain", toy);
      });
    });

    it("deletes gifts from the list of gifts", function() {
      cy.getTest("kid-list")
        .children()
        .first()
        .click()
        .should("have.class", "bg-gray-200");

      cy.getTest("delete-gift")
        .first()
        .click();
    });

    it("deletes kid from the list of kids", function() {
      cy.getTest("kid-list")
        .children()
        .first()
        .click()
        .should("have.class", "bg-gray-200");

      cy.getTest("delete-kid").click();
    });
  });
});

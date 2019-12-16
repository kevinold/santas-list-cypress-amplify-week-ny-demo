// type definitions for Cypress object "cy"
/// <reference types="cypress" />

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
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
const jwt = require("jsonwebtoken");
const uuid = require("uuid/v4");

const awsConfig = require("../../src/aws-exports");
const { aws_user_pools_web_client_id } = awsConfig;

const validJwtMock = jwt.sign(
  {
    data: "foobar"
  },
  "secret",
  { expiresIn: "1h" }
);

const userKey = key =>
  `CognitoIdentityServiceProvider.${aws_user_pools_web_client_id}.user.${key}`;

export const refreshTokenKey = userKey("refreshToken");
const idTokenKey = userKey("idToken");
const clockDriftKey = userKey("clockDrift");
const accessTokenKey = userKey("accessToken");
const userDataKey = userKey("userData");
const lastAuthUserKey = `CognitoIdentityServiceProvider.${aws_user_pools_web_client_id}.LastAuthUser`;

Cypress.Commands.add("getTest", s => cy.get(`[data-test=${s}]`));

Cypress.Commands.add("mockAmplifyCognitoLogin", () => {
  cy.window()
    .its("localStorage")
    .then(localStorage => {
      localStorage.setItem("amplify-authenticator-authState", "signedIn");
      localStorage.setItem(refreshTokenKey, validJwtMock);
      localStorage.setItem(lastAuthUserKey, "user");
      localStorage.setItem(idTokenKey, validJwtMock);
      localStorage.setItem(clockDriftKey, 0);
      localStorage.setItem(accessTokenKey, validJwtMock);
      localStorage.setItem(userDataKey, {
        UserAttributes: [
          { Name: "sub", Value: uuid() },
          { Name: "email_verified", Value: "true" },
          { Name: "phone_number_verified", Value: "false" },
          { Name: "phone_number", Value: "+12225551212" },
          { Name: "email", Value: "user@example.com" }
        ],
        Username: "user"
      });
    });
});

Cypress.Commands.add("loginToCognito", (username, password) => {
  cy.visit("/")
    .get("[data-test=username-input]")
    .type(username)
    .get("[data-test=sign-in-password-input]")
    .type(password)
    .get("[data-test=sign-in-sign-in-button]")
    .click();
});

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorageCache", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorageCache", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

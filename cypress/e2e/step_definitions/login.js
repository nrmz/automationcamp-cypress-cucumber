import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";

Given("A web browser is in mirorim.com", () => {
  cy.visit("/");
});

When("A user selects country {string}", (countryName) => {
  loginPage.selectsCountry(countryName);
});

When("types username {string}", (mobile) => {
  loginPage.typeUsername(mobile);
});

When("clicks login", () => {
  loginPage.elements.loginBtn().click();
});

Then("password field should appear", () => {
  loginPage.elements.passwordInput1().should("exist");
  loginPage.elements.passwordInput2().should("exist");
  loginPage.elements.passwordInput3().should("exist");
  loginPage.elements.passwordInput4().should("exist");
  cy.get("button").contains("Next").should("exist");
});

When("types password {string}", (password) => {
  loginPage.typePassword(password);
});

Then("user should be loggedIn", () => {
  cy.url().should("contains", "/tasks");
});

Then("error alert should appear", () => {
  loginPage.elements.mobileAlertMessage().should("exist");
});

Then("password fields should be in error state", () => {
  const passwordElements = loginPage.getPasswordFields();
  passwordElements.forEach((passwordElement) => {
    passwordElement.should("have.class", "invalid");
  });
});

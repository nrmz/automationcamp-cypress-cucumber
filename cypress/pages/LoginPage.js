class LoginPage {
  elements = {
    usernameInput: () => cy.get("#mobile-input"),
    passwordInput1: () => cy.get("#password--0"),
    passwordInput2: () => cy.get("#password--1"),
    passwordInput3: () => cy.get("#password--2"),
    passwordInput4: () => cy.get("#password--3"),
    loginBtn: () => cy.get(".landing-green-hover"),
    countrySelect: () => cy.get(".landing-login-country"),
    countrySearch: () => cy.get("#search-country"),
    countryItem: () => cy.get(".country-item"),
    mobileAlertMessage: () => cy.get(".register-alert"),
  };

  selectsCountry(country) {
    this.elements.countrySelect().click();
    this.elements.countrySearch().type(country);
    this.elements.countryItem().click();
  }

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput1().type(password[0]);
    this.elements.passwordInput2().type(password[1]);
    this.elements.passwordInput3().type(password[2]);
    this.elements.passwordInput4().type(password[3]);
  }

  getPasswordFields() {
    return [
      this.elements.passwordInput1(),
      this.elements.passwordInput2(),
      this.elements.passwordInput3(),
      this.elements.passwordInput4(),
    ];
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }
}

export const loginPage = new LoginPage();

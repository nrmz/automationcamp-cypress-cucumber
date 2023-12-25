Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is in mirorim.com

    Scenario: Success Login
        When A user selects country "Iran"
        And types username "9128458991"
        And clicks login
        Then password field should appear
        When types password "3333"
        Then user should be loggedIn

    Scenario: Show Invalid mobile error message
        When A user selects country "Iran"
        And types username "11111111"
        And clicks login
        Then error alert should appear

    Scenario: Show Invalid mobile error message
        When A user selects country "Iran"
        And types username "9926494914"
        And clicks login
        Then password field should appear
        When types password "5269"
        Then error alert should appear
        And password fields should be in error state

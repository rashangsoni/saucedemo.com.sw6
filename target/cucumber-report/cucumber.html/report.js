$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into saucedemo website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5613606600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "I should Login Successfully with valid Credentials",
  "description": "",
  "id": "login-test;i-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter username \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should navigate to login page successfully and observe text \"Products\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 160382100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 18
    }
  ],
  "location": "LoginStep.iEnterUsername(String)"
});
formatter.result({
  "duration": 201860700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 143385200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 172224600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Products",
      "offset": 63
    }
  ],
  "location": "LoginStep.iShouldNavigateToLoginPageSuccessfullyAndObserveText(String)"
});
formatter.result({
  "duration": 112965800,
  "status": "passed"
});
formatter.after({
  "duration": 741983300,
  "status": "passed"
});
formatter.before({
  "duration": 2762734300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I can observe that six products are display on page",
  "description": "",
  "id": "login-test;i-can-observe-that-six-products-are-display-on-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter username \"standard_user\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can observe that six products are display on page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iAmOnHomepage()"
});
formatter.result({
  "duration": 106100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 18
    }
  ],
  "location": "LoginStep.iEnterUsername(String)"
});
formatter.result({
  "duration": 220522000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 18
    }
  ],
  "location": "LoginStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 189497100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 170315200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iCanObserveThatSixProductsAreDisplayOnPage()"
});
formatter.result({
  "duration": 80263700,
  "status": "passed"
});
formatter.after({
  "duration": 795333700,
  "status": "passed"
});
});
package com.saucedemo.sw6.sw6.steps;

import com.saucedemo.sw6.sw6.pages.LoginPage;
import com.saucedemo.sw6.sw6.pages.ProductsPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class LoginStep {
    @Given("^I am on homepage$")
    public void iAmOnHomepage()
    {

    }

    @When("^I enter username \"([^\"]*)\"$")
    public void iEnterUsername(String userName)
    {
        new LoginPage().enterUserName(userName);

    }


    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)
    {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton()
    {
        new LoginPage().clickOnLoginButton();
    }


    @Then("^I should navigate to login page successfully and observe text \"([^\"]*)\"$")
    public void iShouldNavigateToLoginPageSuccessfullyAndObserveText(String verifyProduct)
    {
        String expectedMessage = "Products";
        String actualMessage = new LoginPage().verifyProduct();
        Assert.assertEquals(actualMessage,expectedMessage);
    }

    @Then("^I can observe that six products are display on page$")
    public void iCanObserveThatSixProductsAreDisplayOnPage()
    {
        new ProductsPage().verifyProductList();
    }
}
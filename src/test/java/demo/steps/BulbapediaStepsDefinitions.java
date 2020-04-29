package demo.steps;

import demo.pages.HomePage;
import demo.pages.ResultPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class BulbapediaStepsDefinitions {

    private HomePage homePage = new HomePage();
    private ResultPage resultPage = new ResultPage();

    @Given("User is on home page of bulbapedia")
    public void userIsOnHomePageOfBulbapedia() {
        homePage.openHomePage();
    }

    @When("User input {string} on search field")
    public void userInputOnSearchField(String keyword) {
        homePage.inputSearch(keyword);
    }

    @When("User press ENTER key")
    public void userPressENTERKey() {
        homePage.pressEnterKey();
    }

    @Then("User will see pokemon number {string} on result page")
    public void userWillSeePokemonNumberOnResultPage(String number) {
        String pokemonNumber = resultPage.resultPageReturnNumber();
        Assert.assertEquals(number, pokemonNumber);
    }

    @Then("User Will see pokemon name {string} on result page")
    public void userWillSeePokemonNameOnResultPage(String name) {
        String pokemonName = resultPage.resultPageReturnName();
        System.out.println(name + " " + pokemonName);
        Assert.assertEquals(name, pokemonName);
    }
}

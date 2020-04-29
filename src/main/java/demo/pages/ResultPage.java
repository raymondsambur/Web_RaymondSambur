package demo.pages;


import demo.webdriver.WebDriverInstance;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ResultPage {
    WebDriverWait wait = new WebDriverWait(WebDriverInstance.driver, 10);

    public String resultPageReturnName(){

        WebElement pokemonName = wait
                .until(ExpectedConditions.presenceOfElementLocated(By.xpath("//big//b")));
        String pokemon = pokemonName.getText();

        return pokemon;
    }

    public String resultPageReturnNumber(){
        WebElement pokemonNumber = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//table[@class='roundy']//a[@title='List of Pokémon by National Pokédex number']/span")));
        String pokemonNo = pokemonNumber.getText();

        return pokemonNo;
    }
}

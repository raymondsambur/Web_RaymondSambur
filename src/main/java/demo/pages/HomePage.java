package demo.pages;

import demo.webdriver.WebDriverInstance;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

public class HomePage {

    WebElement inputSearch;
    String word = "";
    public void openHomePage(){
        WebDriverInstance.driver.get("https://bulbapedia.bulbagarden.net/wiki/Main_Page/");
    }

    public void inputSearch(String keyword){
        word = keyword;
        inputSearch = WebDriverInstance.driver.findElement(By.id("searchInput"));
    }

    public void pressEnterKey(){
        inputSearch.sendKeys(word, Keys.ENTER);
    }

}

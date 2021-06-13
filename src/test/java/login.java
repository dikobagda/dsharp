import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import utils.varr;

public class login{

    WebDriver driver;
    WebDriverWait wait;

    @BeforeTest
    public void launchBrowser(){
        
        System.setProperty(varr.chromeDriver, varr.pathChrome);
        ChromeOptions options = new ChromeOptions();
        options.addArguments(varr.chromeIncognito, varr.chromeMaximized);
        driver = new ChromeDriver(options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(30));
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(20, 1));
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(30,1));
        driver.get(varr.baseUrl);
    }

    @AfterTest
    public void terminateBrowser(){
        if (driver != null){
            driver.quit();
        }
    }

    @Test(priority = 1, dataProvider = "dataLogin")
    public void loginCredentials(String userid, String condition) throws InterruptedException{
        WebElement inputId = driver.findElement(By.id("fakeinput"));
        inputId.click();
        Thread.sleep(2000);

        // Input user Id
        WebElement userId = driver.findElement(By.id("userloginid"));
        userId.clear();
        userId.sendKeys(userid);
        Thread.sleep(2000);

        // Click Button Oke
        WebElement btnOk = driver.findElement(By.xpath("//button[normalize-space()='OK']"));
        btnOk.click();
        Thread.sleep(2000);

        // Click Button Login
        WebElement btnLogin = driver.findElement(By.xpath("//*[@value='LOGIN']"));
        btnLogin.click();
        Thread.sleep(2000);

        if (condition != "loginSuccess"){
            WebElement txtFailed = driver.findElement(By.id("logininfo"));
            String failedCase = txtFailed.getText();
            System.out.println("Condition Failed : "+failedCase);
            Assert.assertEquals(failedCase, "ID tidak ditemukan. Silahkan coba lagi.");
        } else {
            System.out.println("Berhasil Login");
        }

        Thread.sleep(2000);
    }

    @Test(priority = 2)
    public void loadGames() throws InterruptedException{
        WebElement load = driver.findElement(By.id("preloadContainer"));
        // wait.until(ExpectedCondition.elementToBeClickable(load));
        load.click();
        Thread.sleep(4000);
    }

    @DataProvider(name = "dataLogin")
    public Object[][] datadriven(){
        Object[][] data = new Object[2][2];

        data[0][0] = "D0101";
        data[0][1] = "loginFailed";

        data[1][0] = "D001";
        data[1][1] = "loginSuccess";

        return data;
    }
}
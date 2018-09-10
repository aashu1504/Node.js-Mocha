var webdriver = require('selenium-webdriver');
var assert = require('assert');
var constants = require("../consts")
const common = require('../generic/common');
var _browser;
var screenshotFilePath = __dirname + '/screenshots/';

describe('Login Test Suite', function (){
    this.timeout(50000);

    before(async function(){
        await common.removeScreenshotBeforeTestRun(screenshotFilePath);
    });

    beforeEach(async function(){
        _browser = await new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        await _browser.get(constants.PROD_URL);
    });

    it('Should be able to login to _user48 Marketing Center',async function(){
        try{
        await _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[1]")).sendKeys(constants.ACCOUNT_ID_SW);
        await _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[2]")).sendKeys(constants.USER_NAME_SW);
        await _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[3]")).sendKeys(constants.PASSWORD_SW);
        await _browser.findElement(webdriver.By.id('btnSubmit')).click();
        const homeActualText = await _browser.findElement(webdriver.By.xpath(".//*[@id='tab_Home']/a/i")).getText();
        await assert.equal(homeActualText,"home");
        }
        catch (err){
            common.takeScreenshots(_browser,screenshotFilePath + '_user48LoginError.png');       
            throw new Error(err.message); 
        }
    });

    it('Should be able to login to _user23 Marketing Center',async function(){
        try{
        await _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[1]")).sendKeys(constants.ACCOUNT_ID_IN);
        await _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[2]")).sendKeys(constants.USER_NAME_IN);
        await _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[3]")).sendKeys(constants.PASSWORD_IN);
        await _browser.findElement(webdriver.By.id('btnSubmit')).click();
        const homeActualText = await _browser.findElement(webdriver.By.xpath(".//*[@id='tab_Home']/a/i")).getText();
        await assert.equal(homeActualText,"home");
        }
        catch (err){
            await common.takeScreenshots(_browser,screenshotFilePath + '_user23LoginError.png');       
            throw new Error(err.message); 
        }
    });

    afterEach(async function(){
        await _browser.quit();
    });
});
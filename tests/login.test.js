var webdriver = require('selenium-webdriver');
var assert = require('assert');
var constants = require("../consts")
const common = require('../generic/common');
var _browser;
var screenshotFilePath = __dirname + '/screenshots/';

describe('Login Test Suite', function (){
    this.timeout(50000);

    before(function(){
        common.removeScreenshotBeforeTestRun(screenshotFilePath);
    });

    beforeEach(function(){
        _browser = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        _browser.get(constants.PROD_URL).then(function(){
            _browser.wait(function() {
                return _browser.executeScript('return document.readyState').then(function(readyState) {
                  return readyState === 'complete';
                });
              });
        })
    });

    afterEach(function(){
        return _browser.quit();
    });

    it('Should be able to login to _user48 Marketing Center',function(){
        return Promise.all([
            _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[1]")).sendKeys(constants.ACCOUNT_ID_SW),
            _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[2]")).sendKeys(constants.USER_NAME_SW),
            _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[3]")).sendKeys(constants.PASSWORD_SW)
        ])
        .then(function(){
            return _browser.findElement(webdriver.By.id('btnSubmit')).click()
            .then(function(){
                return _browser.findElement(webdriver.By.xpath(".//*[@id='tab_Home']/a/i")).getText()
                .then(function(text){
                    assert.equal(text,"home");
                })
            })
        })        
        .catch(function(err){    
            common.takeScreenshots(_browser,screenshotFilePath + '_user48LoginError.png');       
            throw new Error(err.message);            
        });
    });

    it('Should be able to login to _user23 Marketing Center',function(){
        return Promise.all([
            _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[1]")).sendKeys(constants.ACCOUNT_ID_IN),
            _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[2]")).sendKeys(constants.USER_NAME_IN),
            _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[3]")).sendKeys(constants.PASSWORD_IN)
        ])
        .then(function(){
            return _browser.findElement(webdriver.By.id('btnSubmit')).click()
            .then(function(){
                return _browser.findElement(webdriver.By.xpath(".//*[@id='tab_Home']/a/i")).getText()
                .then(function(text1){
                    assert.equal(text1,"home");
                })
            })
        })
        .catch(function(err){     
            common.takeScreenshots(_browser,screenshotFilePath + '_user23LoginError.png');        
            throw new Error(err.message);            
        });
    });
});
var webdriver = require('selenium-webdriver');
var assert = require('assert');
var constants = require("../consts")


describe('Login Test Suite', function (){
    this.timeout(50000);
    var _browser;

    beforeEach(function(){
        _browser = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        _browser.get(constants.PROD_URL);
        _browser.manage().window().maximize();
    });

    afterEach(function(){
        return _browser.quit();
    });

    it('Should be able to login to AccountID Marketing Center',function(){
            return _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[1]")).sendKeys(constants.ACCOUNT_ID_SW)
            .then(function(){
                return  _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[2]")).sendKeys(constants.USER_NAME_SW)
                .then(function(){
                    return  _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[3]")).sendKeys(constants.PASSWORD_SW)
                    .then(function(){
                        return  _browser.findElement(webdriver.By.id('btnSubmit')).click()
                        .then(function(){
                             return _browser.findElement(webdriver.By.xpath(".//*[@id='tab_Home']/a/i")).getText()
                             .then(function(text){
                                assert.equal(text,"home");
                             });
                        });
                    });
                });
            });
    });

    it('Should be able to login to AccountID Marketing Center',function(){
        return _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[1]")).sendKeys(constants.ACCOUNT_ID_IN)
        .then(function(){
            return  _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[2]")).sendKeys(constants.USER_NAME_IN)
            .then(function(){
                return  _browser.findElement(webdriver.By.xpath(".//*[@id='loginBoxDiv']/input[3]")).sendKeys(constants.PASSWORD_IN)
                .then(function(){
                    return  _browser.findElement(webdriver.By.id('btnSubmit')).click()
                    .then(function(){
                         return _browser.findElement(webdriver.By.xpath(".//*[@id='tab_Home']/a/i")).getText()
                         .then(function(text){
                            assert.equal(text,"home");
                         });
                    });
                });
            });
        });
    });
});
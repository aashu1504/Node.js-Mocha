# Node.js - Selenium Web Driver with Mocha

Selenium is a wonderful library. It supports all major browsers, has all the features we will probably need, and is currently the standard in browser tests today.

Selenium has bindings for lots of languages — Java, C#, Python, Ruby, and others. This is great — you can use your favorite language to write your tests in.

JavaScript’s asynchronous nature poses special challenges for Selenium.

Selenium can be used in combination with the JavaScript language, thanks to the Node.JS engine and the Mocha framework.

# Setting up Selenium with JavaScript and Node.JS

In case you don’t have a dev environment geared towards the web, you need to install some essentials tools:

Node.JS — An engine that allows you to run JavaScript applications without a browser. It comes bundled with npm- the node package manager (think of it as a sort of Maven, if you’re coming from Java). Npm allows us to install other packages, including Selenium itself.

An IDE — Visual Studio Code(recommended) though there are others too.

Steps:

1. Create a new folder at a specific directory. Now, it’s time to interact with Node by initializing a project: do this by opening a new command line/terminal window in that folder and typing "npm init"

2. Node will guide you through the creation of the package.json file, which is similar to the pom.xml from Maven. It holds information like your project name, version, description and more. If you are unsure what to write for every prompt, just hit Enter to continue.

3. Once done, it’s time to install Selenium and the Mocha framework  Node.JS uses the npm to achieve such thing.

4. To get Selenium, simply open a command line/terminal in your project folder and type "npm install selenium-webdriver --save"

5. Another package that we need to install is Mocha. This is similar to TestNG from the Java world. It enables the use of different functionalities that are already present in the selenium-webdriver package. Do this by typing in a command line/terminal "npm install -g mocha"

# Writing a simple test

Once you have installed all of the things above, it’s time to actually write a test.

Start your IDE, in my case Visual Studio Code, and go to File > Open Folder. Then choose your project folder. 
Create a new one called "login.test.js"

In this test, we will go through these steps (you can find code in the repo):

1. Start the browser using Webdriver

2. Access the login page

3. Enter Credentials

4. Click Login

5. Verify that the title of the new page is the one we are expecting

6. Close the browser

To run the test, save the file and click the play button in the top-right section of Visual Studio Code or press Ctrl + Alt + N. Alternatively, you can open up a command line/terminal in your folder and enter the command: "node login.test.js"

# Adding Mocha Framework

For the JavaScript, we are using the Mocha framework. Mocha enables us to define before and after functions, as well as organize tests with names and descriptions.

The test steps for this file, "login.test.js", are:

1. Define the variables that require selenium-webdriver.

2. Define an assert variable that uses the built-in assert package from Node.JS.

3. Declare the driver variable.

4. Create a test group with a description and then its main function.

5. Create a beforeEach/afterEach/before/after generator function as and when required.

6. Create the actual test.

7. Assert the output.

8. Close the browser.

Mocha must be ran with their own command: "mocha login.test.js"

# Promises and Async/Await with Selenium JS

WebDriverJS is asynchronous that means it won’t automatically wait for one command to run before running another.

WebDriverJS uses ‘promises’ to be able to write code that runs in a specified order, and a ‘promise manager’ to make sure this happens.

The promise library helps us wtih ordering, but anything that retrieves a value from the browser (like getting a text value, whether an element exists, getting the browser title) must be written using a promise.

All the functions in Selenium WebDriver return a Promise as below.

_browser.findElement(webdriver.By.xpath("xpath")).sendKeys(constants.Password)
.then(function() {
_browser.findElement(webdriver.By.id('btnSubmit')).click();
})
.then(function() {
_browser.isElementPresent(webdriver.By.id('home'))
.then(function(present) {
      assert.equal(present, true,container not displayed);
});
});

This is better, as now our code has control on when things happen, but it’s still Promise code — not the nicest way to write.

Fortunately, we now have async/await to help us. So above code can be changed to :

it('Should be able to login',async function(){
await _browser.findElement(webdriver.By.xpath("xpath")).sendKeys(constants.Password);
await _browser.findElement(webdriver.By.id('btnSubmit')).click();
await _browser.isElementPresent(webdriver.By.id('home'))
await assert.equal(present, true,container not displayed);
});
    

# Reporting - Mocha Awesome:

Mocha Awesome is a custom Mocha Test reporter which generates test results in an HTML and JSON File.

To get Mocha Awesome, simply open a command line/terminal in your project folder and type "npm i mochawesome --save"

To generate report simply run mocha test using command : "mocha login.test.js ----reporter mochawesome"

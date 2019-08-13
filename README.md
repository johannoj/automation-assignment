# Protractor Automation Of IMDB
Here are simple assertions I made for IMDB Search Functionality.



## Setup:
* Install [Node](http://nodejs.org) (v8.x.x or later)
* Install protractor
    npm install -g protractor
* Update Webdriver manager
    webdriver-manager update
* Installing and Starting the Server
  To install and start the standalone Selenium Server manually, use the webdriver-manager command line tool, which comes with Protractor.
  1. Run the update command: webdriver-manager update This will install the server and ChromeDriver.
  2. Run the start command: webdriver-manager start This will start the server. You will see a lot of output logs, starting with INFO. The last line will be 'Info - Started org.openqa.jetty.jetty.Server'.
  3. Leave the server running while you conduct your test sessions.
  4. In your config file, set seleniumAddress to the address of the running server. This defaults to http://localhost:4444/wd/hub.    


## Run tests:
* run tests via local
  Pre-requisite: webdriver should be started first
    command: webdriver-manager starts
  Run Tests:  
    command: protractor <spec filename>

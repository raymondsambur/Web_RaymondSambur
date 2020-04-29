$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/searchBulbapedia.feature");
formatter.feature({
  "name": "Search on bulbapedia site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Web"
    }
  ]
});
formatter.scenario({
  "name": "Search Pikachu in list pokemon on bulbapedia site",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Web"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on home page of bulbapedia",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userIsOnHomePageOfBulbapedia()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input \"Pikachu\" on search field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userInputOnSearchField(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d81.0.4044.129)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027dnid0652l01.local\u0027, ip: \u0027fe80:0:0:0:c9e:fb6b:2c36:e898%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/rt/s08pl9cx467...}, goog:chromeOptions: {debuggerAddress: localhost:54128}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 76e24a8455bc5fe5c23244a4f309bea2\n*** Element info: {Using\u003did, value\u003dsearchInput}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat demo.pages.HomePage.inputSearch(HomePage.java:18)\n\tat demo.steps.BulbapediaStepsDefinitions.userInputOnSearchField(BulbapediaStepsDefinitions.java:22)\n\tat ✽.User input \"Pikachu\" on search field(file:///Users/samburr/IdeaProjects/Web_RaymondSambur/src/test/resources/features/searchBulbapedia.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "User press ENTER key",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userPressENTERKey()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User will see pokemon number \"#025\" on result page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userWillSeePokemonNumberOnResultPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Will see pokemon name \"Pickachu\" on result page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userWillSeePokemonNameOnResultPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});
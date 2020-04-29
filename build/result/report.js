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
  "status": "passed"
});
formatter.step({
  "name": "User press ENTER key",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userPressENTERKey()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will see pokemon number \"#025\" on result page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userWillSeePokemonNumberOnResultPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Will see pokemon name \"Pickachu\" on result page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userWillSeePokemonNameOnResultPage(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cPi[c]kachu\u003e but was:\u003cPi[]kachu\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat demo.steps.BulbapediaStepsDefinitions.userWillSeePokemonNameOnResultPage(BulbapediaStepsDefinitions.java:40)\n\tat ✽.User Will see pokemon name \"Pickachu\" on result page(file:///Users/samburr/IdeaProjects/Web_RaymondSambur/src/test/resources/features/searchBulbapedia.feature:9)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Pysduck in list pokemon on bulbapedia site",
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
  "name": "User input \"Psyduck\" on search field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userInputOnSearchField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press ENTER key",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userPressENTERKey()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will see pokemon number \"#054\" on result page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userWillSeePokemonNumberOnResultPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Will see pokemon name \"Psyduck\" on result page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userWillSeePokemonNameOnResultPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "User input \"Onix\" on search field",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userInputOnSearchField(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press ENTER key",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userPressENTERKey()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will see pokemon number \"#095\" on result page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userWillSeePokemonNumberOnResultPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Will see pokemon name \"Onix\" on result page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.BulbapediaStepsDefinitions.userWillSeePokemonNameOnResultPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
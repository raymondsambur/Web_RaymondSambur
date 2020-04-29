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

@Web
Feature: Search on bulbapedia site

  Scenario: Search Pikachu in list pokemon on bulbapedia site
    Given User is on home page of bulbapedia
    When User input "Meowth" on search field
    When User press ENTER key
    Then User will see pokemon number "#052" on result page
    And User Will see pokemon name "Meowth" on result page

  Scenario: Search Pysduck in list pokemon on bulbapedia site
    Given User is on home page of bulbapedia
    When User input "Psyduck" on search field
    When User press ENTER key
    Then User will see pokemon number "#054" on result page
    And User Will see pokemon name "Psyduck" on result page

  Scenario: Search Pikachu in list pokemon on bulbapedia site
    Given User is on home page of bulbapedia
    When User input "Onix" on search field
    When User press ENTER key
    Then User will see pokemon number "#095" on result page
    And User Will see pokemon name "Onix" on result page
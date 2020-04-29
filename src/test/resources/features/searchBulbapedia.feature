@Web
Feature: Search on bulbapedia site

  Scenario: Search Pikachu in list pokemon on bulbapedia site
    Given User is on home page of bulbapedia
    When User input "Pikachu" on search field
    When User press ENTER key
    Then User will see pokemon number "#025" on result page
    Then User Will see pokemon name "Pickachu" on result page

  Scenario: Search Pysduck in list pokemon on bulbapedia site
    Given User is on home page of bulbapedia
    When User input "Psyduck" on search field
    When User press ENTER key
    Then User will see pokemon number "#054" on result page
    Then User Will see pokemon name "Psyduck" on result page

  Scenario: Search Pikachu in list pokemon on bulbapedia site
    Given User is on home page of bulbapedia
    When User input "Onix" on search field
    When User press ENTER key
    Then User will see pokemon number "#095" on result page
    Then User Will see pokemon name "Onix" on result page
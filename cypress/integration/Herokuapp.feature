@feature-tag
Feature: UI Examples Main Page

    I want to open the page with Available Examples

    @tag-to-include
    Scenario: Opening a main page
        Given I open Herokuapp page
        Then I see "The Internet" in the title
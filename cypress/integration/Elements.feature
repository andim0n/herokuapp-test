Feature: Add or remove elements

    I want to add and remove elements by clicking the buttons

    Background: Opening Elements page
        Given Open Add element page

    Scenario: Add element
        When I click the "Add element" button
        Then I should see "Delete" button

    Scenario: Add N Elements
        When I click the "Add element" button 10 times
        Then I should see 10 "Delete" buttons

    Scenario: Delete element
        When I click the "Add element" button
        And I click the "Delete" button
        Then I should not see "Delete" button
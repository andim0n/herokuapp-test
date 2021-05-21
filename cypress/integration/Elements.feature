Feature: Add or remove elements

    I want to add and remove elements by clicking the buttons

    Background: Opening Elements page
        Given Open Add element page

    Scenario: Add element
        When I click the "Add element" button
        Then I should see "Delete" button
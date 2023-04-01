Feature: Sign Up
    Background: 
        Given I am on Hotels homepage

    @verifyEmptyForm
    Scenario: Verify rewards form is empty and Conitnue button is disabled
         Then I click on Learn about Hotels.com Rewards
             And I switch to Hotel Rewards handle
             And I verify Hotels Rewards opened in a new window
             And I click on Join Now
             And I verify Form is blank
             And I verify Continue button is NOT enabled


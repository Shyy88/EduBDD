Feature: Search "online" in Zero Web

    As a valid user 
    I want to search "online" in Zero Web

    Scenario: Search online
        Given I open homepage 
        Then I enter search "online"
        When I should see search result page
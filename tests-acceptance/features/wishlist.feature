Feature: As a house member
        I want to manage items on the wishlist
        So that I can track the progress on buying each item

Scenario: Marking item as bought when another item was ready to buy as well
Given I am at the "Wishlist" page
And I have "125" money at the Vault
And I can see an item "Router" with price "100" and "100" percent completion
And I can see an item "Frying Pan" with price "50" and "100" percent completion
When I mark the item "Router" as bought
Then I cannot see the item "Router" anymore
And I can still see the item "Frying Pan"
And I can see an item "Frying Pan" with price "50" and "50" percent completion
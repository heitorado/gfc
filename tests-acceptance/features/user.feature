Feature: As a house member
        I want to access the the safe box of the house
        So that I can track the house’s financial status

Scenario: Removing money from Safe Box from bought wishlist item
Given I am at the “Safe Box” page
And I can see the “Safe Box” has a “+200,00” money surplus
And the “toaster” item is in the “Wishlist” with “100,00” price
When “toaster” is marked as “bought”
Then I can see now the “Safe Box” has a “+100,00” money surplus

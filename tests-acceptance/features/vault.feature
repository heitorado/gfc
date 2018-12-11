Feature: As a house member
        I want to access the the safe box of the house
        So that I can track the house’s financial status

Scenario: Removing money from Safe Box from bought wishlist item
Given I am at the “Safe Box” page
And I can see the “Safe Box” has a “+200,00” money surplus
And the “toaster” item is in the “Wishlist” with “100,00” price
When “toaster” is marked as “bought”
Then I can see now the “Safe Box” has a “+100,00” money surplus

Scenario: Showing who hasn’t registered payment when the Safe Box goes to a negative balance
Given I am at the “Safe Box” page
And “Heitor”, “Lucas” and “Saulo” are registered users
And the month expense is “100”
And “Heitor” has added “100” money to the Safe Box 
And “Lucas” has added “100” money to the Safe Box
And “Saulo” has added “50” to the Safe Box
And the “Safe Box” has “+250” surplus
And a “300” price “electric bill” is registered
When the “electric bill” is mark as paid
Then I see the “Safe Box” with a “-50” balance
And I see an alert saying “Saulo has registered below the month expense” 
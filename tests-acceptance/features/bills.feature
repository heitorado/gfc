Feature: As a house member
        I want to manage the common expenses of the house
        So that I can keep the house expenses up to date and know how much was spent this month

Scenario: Adding a paid bill
Given I am at the "Common Expenses" page
And I can not see a bill named “Conta de Internet”
When I create a paid bill named “Conta de Internet” with the value “150”
Then I can see a paid bill named “Conta de Internet” with the value “150”
And the Safe Box has a debit of “150”

Scenario: Changing the cost of an light bill expired
Given I am at the "Common Expenses" page
And I can see an expired bill with the value “32”
When I click over the bill
And I change the value to “35”
And I reload the page
Then I can see an expired bill with the value “35”

Scenario: Delaying an expiration of a bill that is alerted as “expiration date soon” 
Given I am at the "Common Expenses" page
And I can see an “expiration date today” alert to the bill “Conta de telefone” 
When I daley the expiration date of the bill “Conta de telefone” in “14” days from now
And I reload the page
Then I do not see an “expiration date today” alert to the bill “Conta de telefone”

Scenario: Change a bill’s status from “paid” to “not paid”
Given I am at the "Common Expenses" page
And I can see a paid bill named “Conta de luz” with the value “60”
When change the bill’s status to “not paid”
Then I can see a not paid bill named “Conta de luz” with the value “60”
And the Safe Box has a credit of “60”
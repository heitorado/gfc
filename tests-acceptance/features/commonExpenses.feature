Feature: As a house member
        I want to manage the common expenses of the house
        So that I can keep the house expenses up to date and know how much was spent this month

Scenario: Adding a paid bill
Given I am at the "Common Expenses" page
And I do not see a bill named “Conta de Internet”
When I create a bill named “Conta de Internet” with the value “150,00”
And I mark the paid checkbox
And I reload the page
Then I can see a paid bill named “Conta de Internet” with the value “150,00”
And the Safe Box has a debit of “150,00”

Scenario: Changing the cost of an light bill expired
Given I am at the "Common Expenses" page
And I see an expired bill with the value “32,00”
When I click over the bill
And I change the value to “35,00”
And I reload the page
Then I can see an expired bill with the value “35,00”

Scenario: Delaying an expiration of a bill that is alerted as “expiration date soon” 
Given I am at the "Common Expenses" page
And I see an “expiration date today” alert to the bill “Conta de telefone” 
When I daley the expiration date of the bill “Conta de telefone” in “14” days from now
And I reload the page
Then I do not see an “expiration date today” alert to the bill “Conta de telefone”

Scenario: Change a bill’s status from “paid” to “not paid”
Given I am at the "Common Expenses" page
And I see a paid bill named “Conta de luz” with the value “60,00”
When change the bill’s status to “not paid”
Then I can see a not paid bill named “Conta de luz” with the value “60,00”
And the Safe Box has a credit of “60,00”

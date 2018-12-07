Feature: As a house member
        I want to Ver quais posses pertencem a quem e os valores de cada posse
        So that Eu possa ter controle do que pertence a quem

Scenario: Cadastro de posse bem-sucedida
Given Eu estou na página “Posses”
And Eu não vejo nenhuma posse cadastrada
And “Gabriel”, “Vítor” e “Saulo” são usuários cadastrados
When Eu cadastro uma nova posse com o nome “Geladeira” e o valor “600”
And Eu associo o usuário “Gabriel” a “Geladeira”
And Eu associo o usuário “Vítor” a “Geladeira”
Then Eu vejo uma posse cadastrada com o nome “Geladeira” de valor “600”
And Eu vejo que o usuário “Gabriel” possui “300” da posse “Geladeira”
And Eu vejo que o usuário “Vítor” possui “300” da posse “Geladeira”
And Eu não vejo “Saulo” na lista de usuários que possuem a “Geladeira"
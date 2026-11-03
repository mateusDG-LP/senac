TESTES DE ERROS:
 path(route='/sobre/', view=views.sobre, name='sobre'),
 1 essa barra antes do sobre gera um erro 404 como resposta

 2 views.sobre tem que esta com mesmo nomes para melhor indificação e sem a probabilidade de erro

     path(route='saudacao/<str:nome>/', view=views.saudacao, name='saudacao'),
 3 <str:nome> serve para registrar de forma temporaria o nome quer for digitado.. ex Luis.. Mateus..

 4 No terminal posso gerar requirements.txt no terminal e ele criarar um arquivo que "lista" de tudo que foi usado no projeto 

 5 criando uma pasta para serviço de lista de atividades com nome "Tasks" digitada no powershell (terminal)
    me ultlizo do comando "py manage.py startapp tasks" para poder criar com todos os seus serviços integrados
 
 6 "Migrations " para o banco de dados, ou seja criei apartir de um modelo os campos para o meu banco de dados,
    . pronto criado  minha tabela Tasks ou Lista de Atividades.    
    
    Meu GitHub:
    https://github.com/mateusDG-LP/senac/blob/main/UCIII/aula03/CANES/README.md

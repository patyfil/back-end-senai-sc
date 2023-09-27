<h1 align="center"> Programação Básica em Back-End - 20h - SENAI/SC </h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto API</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout Calculadora</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

---

## 🚀 Tecnologias

### Conteúdo do curso

### Módulo I - Fundamentos da linguagem JavaScript

    - Configuração do ambiente de desenvolvimento utilizando a plataforma Codesandbox;
    - Introdução à linguagem JavaScript;
    - Tipos de dados;
    - Operadores aritméticos, relacionais e lógicos;
    - Expressões lógicas e aritméticas;
    - Estruturas de controle e repetição;
    - Funções;

### Módulo II - Fundamentos básicos de back-end

    - Introdução à plataforma Node.js;
    - Introdução ao framework Express;
    - Instalação e configuração do SGBD MongoDB na nuvem;
    - Estilo arquitetural REST;
    - Teste de API utilizando a ferramenta Postman.

## 💻 Módulo I - Calculadora com JS

- [Visite o projeto online](https://patyfil.github.io/back-end-senai-sc/)

## 🔖 Layout

<div align="center">
  <p align="center"> Calculadora com JS </p>
  <br>
  <img alt="print da calculadora" src="./img/preview.jpg" width="50%">
</div>

## Módulo II - API REST

Desenvolvimento de uma API REST usando o Node.js, Express.js e MongoDB Atlas para armazenar esses dados.  

A aplicação é responsável por realizar as operações de CRUD básicas com a entidade “Usuário” com os seguintes Campos:  
nome, login e senha.  
• Cada usuário é uma instância dessa entidade, e eles compartilham as mesmas características básicas, como nome, login e senha.  

- Em resumo:  
  É necessário criar EndPoints para:  
      - Criar usuários  
      - Ler Usuários  
      - Atualizar Usuários  
      - Excluir Usuários  

A estrutura da API REST está representada na tabela abaixo:  
<div>
  <img align="center" alt="print do crud" src="./img/crud.jpg" width="50%"> 
</div>

### Necessários instalar os seguintes módulos

- Express (usado para o middleware criar vários terminais CRUD)  
- Mongoose (usado para gerenciar dados no MongoDB, usando várias consultas)  
- Body-parser (usado para processar dados enviados por meio de um corpo de solicitação HTTP)  
- Cors (usado para permitir ou restringir recursos solicitados em um servidor web, dependendo de onde a solicitação HTTP foi iniciada)  

• DICA: Se basear em um EndPoint com método POST para finalizar a sua demanda de criação da rota de edição dos usuários, pois elas são muito similares.  

## 🔖 Projeto
### TESTES

Fazer o teste de todas as rotas utilizando a ferramenta ***Postman***.  

- Rota para exibir uma mensagem ao usuário  
Acesso: GET https://6cl7pw-4000.csb.app  
Saída: Olá mundo! Esta é a página inicial da nossa aplicação.  

- Rota padrão para verificação do funcionamento da aplicação  
Acesso GET: https://6cl7pw-4000.csb.app/api  
Saída: {"message":"Olá mundo! Está é a nossa API desenvolvida em Node.js."}  

## CRUD

- Método GET: retornar a listagem de todos os usuários  
Acesso: GET https://6cl7pw-4000.csb.app/api/usuarios/  

![print da listagem de todos os usuários  ](./img/get.jpg)  

---

- Método GET: listar as informações de um usuário específico  
Acesso Exemplo: GET https://6cl7pw-4000.csb.app/api/usuarios/usuario_id  
Acesso: GET https://6cl7pw-4000.csb.app/api/usuarios/651359f5ff6a73d858a258a5  

![print de um usuário específico ](./img/getUsuarioID.jpg)  

---

- Método POST: cadastrar um usuário  
Acesso: POST https://6cl7pw-4000.csb.app/api/usuarios  

![print de um cadastro de um usuário ](./img/cadastrarUsuario.jpg)  

---

- Método PUT: atualizar as informações de um usuário específico  
Acesso: PUT https://6cl7pw-4000.csb.app/api/usuarios/usuario_id  


![print de uma atualização de um usuário ](./img/put.jpg)  

---

- Método DELETE: deletar um usuário específico  
Acesso: DELETE https://6cl7pw-4000.csb.app/api/usuarios/usuario_id  

![print do delete de um usuário](./img/delete.jpg)  

---

- MongoDB Atlas  
![print do MongoDB Atlas](./img/mongoDB.jpg)  

---

Feito com ♥ by Patrícia

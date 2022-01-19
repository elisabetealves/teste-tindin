
# 🚀 CRUD - Teste Tindin

### Este é mais um repositório para um teste de back end junior Tindin.

<br>

> ⚠️ CRUD é um acrônimo para Create, Read, Update e Delete. São as 4 operações principais em um banco de dados. No MongoDB, usando o Mongoose aqui estão algumas formas de fazer:


| OPERAÇÃO | MONGODB | MONGOOSE |
| --- | --- | --- |
| `C` reate | insertOne() | save() |
| `R` ead | find() | find() |
| `U` pdate | updateOne() | save() |
| `D` elete | deleteOne() | remove() |Tênis Fila Slant Summer 2.0 Feminino

<br>

# 🧠 Contexto

O objetivo foi criar uma API onde fosse possível gerenciar aulas e comentários sobre as aulas. 

  - Como rodar o projeto localmente 
  - Tecnologias
  - Arquitetura
  - Requisitos e endpoints
  - Saudações, Eli!

<br>

# ⚙️ Como rodar o projeto localmente
Siga os passos e inclua as informações abaixo:

| Passo     | Comando/informação       |
| --------- | ----------- |
| Faça o fork  | `botão de forkar` |
| ou Faça o clone  | `git clone` |
| Instale as dependências   | `npm i` |
| Crie seu .env e inclua as variáveis e os valores  | `MONGODB_URL` / `SECRET` |
| utilize o script de dev    | `npm start` |

<br>

# 🛠️ Tecnologias

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `bcrypt` |  permite adicionar um código aleatório ao hash original, também permite aumentar a dificuldade de decifrar o hash por adicionar um salt. Permitindo utilizar o poder computacional para criptografar os dados.|
| `jsonwebtoken` | é uma string de caracteres codificados, permite que somente o servidor que conhece o ‘segredo’ possa ler o conteúdo do token, e assim confirmar a autenticidade do cliente.|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
| `MongoDb` | Banco de dados orientado a documentos para verificar se os dados foram persistidos|
| `Postman` | Interface gráfica para realizar os testes manuais das chamadas|
| `Swagger` | Interface para descrever APIs RESTful expressas usando JSON |
  
<br> 

# 📁 Arquitetura

```
 📁 teste-tindin
   |
   |-  📁 src
   |    |- 📁 controllers
   |         |- 📑 classesController.js
   |         |- 📑 commentsController.js
   |         |- 📑 userController.js
   |
   |
   |    |- 📁 data
   |         |- 📑 database.js
   |
   |
   |    |- 📁 models
   |         |- 📑 classes.js
   |         |- 📑 comment.js
   |         |- 📑 user.js
   |
   |    |- 📁 routes
   |         |- 📑 classesRoutes.js 
   |         |- 📑 commentsRoutes.js 
   |         |- 📑 index.js
   |
   |    |- 📑 app.js
   |    |- 📑 swagger.json
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 LICENSE
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 server.js

```

<br>

# 🔗 Link

### DOCUMENTAÇÃO SWAGGER 

- http://localhost:7070/api-docs/


### Obs .: O link só mostrará a documentação quando o projeto estiver conectado, ou seja, quando o servidor estiver rodando.

<br>

# <img align="center" alt="Lizz-Mongodb" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"> MongoDB Atlas

### O núcleo do MongoDB Cloud é o `MongoDB Atlas`, um banco de dados de nuvens totalmente gerenciado para aplicativos modernos. Atlas é a melhor maneira de administrar MongoDB, o líder em bancos de dados modernos. O modelo de documentos do MongoDB’s é a maneira mais rápida de inovar, trazendo flexibilidade e facilidade de uso para o banco de dados.

<br>

# 🔃 Requisitos e endpoints 


GET
-   **"/index"** Deverá retorna uma pequena apresentação
-   **"/classes/all"** Listar aulas cadastradas
-   **"/classes/[id]"** Obter detalhes de uma aula pelo o id
-   **"/classes/comments"** Listar todos os comentários de uma aula

POST
-   **"/user"** Logar com um usuário
-   **"/classes"**  Criar uma nova aula 
-   **"/classes/[id]/like"**  Criar um like para a aula selecionada 
-   **"/classes/[id]/dislake"**  Retira um like para a aula selecionada  

PUT
-   **"/classes"** Atualizar o cadastro de uma aula


DELETE
-   **"//classes/[id]"** Excluir o cadastro de uma aula
-   **"/classes/comments/[ID]"** Excluir um comentário

REGRAS
-   Não deverá ser possível criar uma aula com o mesmo nome

<br>

#	🔄 Aplicação para produção

Para colocar uma aplicação em produção eu usaria a AWS pois tem vários benefícios dentre elas:
- Estabilidade
- Custo x Beneficio
- Segurança
- Confiabilidade
- Flexível
- Personalizavel

Além do mais permite que você selecione o sistema operacional, a linguagem de programação, o banco de dados entre outros serviços e sendo um dos melhores do mercado por causa do AbStartup.

Usaria o serviço EC2 pois facilita a criação e a migração de aplicação com uma ferramenta mais adequada e rapída, não há necessidade de investir rm hardware (não a princípio) possibilitando desenvolver e implementar aplicativos com mais rapidez e ainda podemos configurar a segurança, as redes e gerenciar o armazenamento. 

<br>

---

<br>

# 👋 Saudações da Eli!

_Obrigada pela oportunidadde!!!_
_Qualquer dúvida ou sugestão, chama no contatinho!_

<br>

 <img src="https://i.picasion.com/pic91/8dd880c47cfc761e805745c941097adb.gif" alt="Gif Yeah" width="200">

<br>

- [LinkedIn](https://www.linkedin.com/in/elisabete-a-santos/)
- [GitHub](https://github.com/elisabetealves)
-  <a href = "mailto:lizzbeth.lizz.diaz@gmail">Gmail</a>
- Telefone: (81) 9 9823-8962

<br>

### Feito com 💜 por Elisabete Alves

<br> 
    
# 📝 Licença

Este projeto esta sob a licença [MIT](./LICENSE).

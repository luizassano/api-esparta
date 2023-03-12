# 👨‍💻 API Esparta

## Para Começar
- Faça o clone do projeto e depois entre no diretório;
- Dentro do diretório rode o comando: yarn 
- Crie um arquivo .env seguindo o modelo do arquivo .env.example.
- Rode migrations do banco de dados com o comando: yarn typeorm migration:run -d src/data-source.ts
- Inicie o servidor com o comando: yarn dev

### ENDPOINTS  

(POST)  -> /project                   -      Criação do projeto
(GET)   -> /project                   -      Lista todos projetos listados
(GET)   -> /project/:project<id>      -      Lista todos projetos do id
(PATCH) -> /project/:project<id>      -      Atualiza os dados de um projeto
(DELETE)-> /project/:project<id>      -      Deleta um projeto.
(POST)  -> /tasks/:project<id>        -     Cria uma task em um projeto                                             
(GET)   -> /tasks/:project<id>        -     Lista todas as tasks
(PATCH) -> /tasks/:task<id>           -     Atualiza os dados de uma task     
(DELETE)-> /tasks/:task<id>           -     Deleta a task                

  ### ENDPOINTS  

    (POST)  -> /categories        -     Criação de categorias
    (GET)   -> /categories        -     Lista todos os categorias
    (GET)   -> /categories/<id    -     Retorna os dados de uma categoria
    (PATCH) -> /categories/<id>   -     Atualiza os dados de uma categoria
    (DELETE)-> /categories/<id>   -     Deleta categorias do banco                                             
    (POST)  -> /products          -     Criação de produtos
    (GET)   -> /products          -     Lista todos os produtos
    (GET)   -> /products/<id>     -     Retorna os dados de um produto
    (PATCH) -> /products/<id>     -     Atualiza os dados de um produto     
    (DELETE)-> /products/<id>     -     Deleta produtos do banco     
    (GET)   -> /products/category/<category_id>	  - Retorna os dados dos produtos pertencentes a categoria dona do id                                   

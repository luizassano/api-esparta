# 👨‍💻 API Esparta

## Para Começar
- Faça o clone do projeto e depois entre no diretório;
- Dentro do diretório rode o comando: yarn 
- Crie um arquivo .env seguindo o modelo do arquivo .env.example.
- Rode migrations do banco de dados com o comando: yarn typeorm migration:run -d src/data-source.ts
- Inicie o servidor com o comando: yarn dev         

  ### ENDPOINTS  

    (POST)  -> /project               -     Criação do projeto
    (GET)   -> /project               -     Lista todos projetos listados
    (GET)   -> /project/:project<id>  -     Lista todos projetos do id 
    (PATCH) -> /project/:project<id>  -     Atualiza os dados de um projeto
    (DELETE)-> /project/:project<id>  -     Deleta um projeto.                                            
    (POST)  -> /tasks/:project<id>    -     Cria uma task em um projeto           
    (GET)   -> /tasks/:project<id>    -     Lista todas as tasks
    (PATCH) -> /tasks/:task<id>       -     Atualiza os dados de uma task  
    (DELETE)-> /tasks/:task<id>       -     Deleta a task          

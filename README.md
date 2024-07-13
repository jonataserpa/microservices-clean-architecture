Curso Clean Code e Clean Architecture da Branas.io

# Curso Clean Code e Clean Architecture

Este projeto utiliza Docker para gerenciar um servidor PostgreSQL e Node.js para a aplicação. 

UC3 - RequestRide

Ator: Passageiro
Input: passenger_id (account_id), from (lat, long), to (lat, long) ok
Output: ride_id ok

Regras:

* deve verificar se o account_id tem is_passenger true ok
* deve verificar se já não existe uma corrida do passageiro em status diferente de "completed", se existir lançar um erro ok
* deve gerar o ride_id (uuid) ok
* deve definir o status como "requested" ok
* deve definir date com a data atual ok

## Pré-requisitos

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/en/)

### 2. Rodar o Docker Compose

```sh
docker-compose up -d
```

### 3. Instalar Dependências
Instale as dependências do projeto usando npm:

```sh
npm install
```

### 4. Rodar o Servidor
Para iniciar o servidor Node.js, execute:
```sh
npx nodemon src/main.ts
```

### 5. Rodar os Testes
Para executar todos os testes, execute:
```sh
npx jest
```
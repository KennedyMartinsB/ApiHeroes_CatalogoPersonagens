# API Heroes - Catalogo Personagens

Aplicação Node.js (Express + Prisma 7 + MariaDB) para gerenciar Heróis e Vilões.

## Pré-requisitos

- Node.js 20 ou superior
- npm
- MariaDB (ou MySQL) instalado e em execução
- Git

## 1. Clonar o repositório

```bash
git clone https://github.com/KennedyMartinsB/ApiHeroes_CatalogoPersonagens.git
cd ApiHeroes_CatalogoPersonagens
```

## 2. Instalar as dependências

```bash
npm install
```

## 3. Configurar o arquivo .env

Crie um arquivo `.env` na raiz do projeto com as variáveis de conexão do banco. Exemplo:

```env
DATABASE_URL="mysql://root:SUA_SENHA@localhost:3306/catalogo_personagens"
DATABASE_HOST="localhost"
DATABASE_PORT=3306
DATABASE_USER="root"
DATABASE_PASSWORD="SUA_SENHA"
DATABASE_NAME="catalogo_personagens"
PORT=3000
```

> Mantenha o `DATABASE_URL` coerente com as variáveis `DATABASE_*` (mesmo usuário, senha e banco). O Prisma CLI usa o `DATABASE_URL`, enquanto a aplicação usa as variáveis `DATABASE_*` para montar o pool de conexões.

## 4. Criar o banco de dados

Garanta que o servidor MariaDB/MySQL esteja rodando e crie o banco definido em `DATABASE_NAME`:

```sql
CREATE DATABASE catalogo_personagens;
```

## 5. Gerar o Prisma Client e aplicar as migrações

```bash
npx prisma generate
npx prisma migrate deploy
```

Em ambiente de desenvolvimento, para criar novas migrações:

```bash
npx prisma migrate dev
```

## 6. Executar a aplicação

```bash
npm run dev
```

ou, para execução simples:

```bash
npm start
```

O servidor inicia em `http://localhost:3000`.

## Rotas principais

| Método | Rota           | Descrição                          |
| ------ | -------------- | ---------------------------------- |
| GET    | `/`            | Verificação de status do servidor  |
| GET    | `/villains`    | Página com a listagem de vilões    |
| GET    | `/heroes`      | Lista de heróis (JSON)             |

## Scripts disponíveis

| Comando       | Descrição                                  |
| ------------- | ------------------------------------------ |
| `npm run dev` | Executa com nodemon (recarrega automático) |
| `npm start`   | Executa com node                          |
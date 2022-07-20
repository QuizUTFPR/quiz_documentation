---
sidebar_position: 3
---

# API (Backend)

Entre no diretório do `backend` e realize a cópia do arquivo `.env.example`.

:::danger Atenção

O nome de destino do arquivo copiado deve ser obrigatoriamente `.env`

:::

```bash
cd quizUTFPR/backend
cp .env.example .env
```

Abra o arquivo `.env` e preencha os seguintes valores:

```title="backend/.env"
APP_URL=

DB_HOST=
DB_PORT=
DB_USER=
DB_PASS=
DB_NAME=
DB_DIALECT=

SECRET=
EXPIRE_IN=
TIMEZONE=

LDAP_URL=
LDAP_USERNAME=
LDAP_PASSWORD=
```

Onde:

- `APP_URL` → URL para acesso da API (usado para gerar _links_ de imagens).
- `DB_HOST` → Endereço do servidor do banco de dados (SGBD).
- `DB_PORT` → Porta do servidor do banco de dados (SGBD).
- `DB_USER` → Usuário do banco de dados.
- `DB_PASS` → Senha do banco de dados.
- `DB_NAME` → Nome do banco de dados.
- `DB_DIALECT` → Tipo de SGBD utilizado, por exemplo: `mysql`.
- `SECRET` → Chave utilizada para geração do **JWT token**.
- `EXPIRE_IN` → Tempo de validade do token, por exemplo: `2d`.
- `TIMEZONE` → Fuso horário utilizado pelo SGBD, por exemplo: `+03:00`.
- `LDAP_URL` → URL do servidor **LDAP** de sua instituição.
- `LDAP_USERNAME` → Usuário do servidor **LDAP** de sua instituição.
- `LDAP_PASSWORD` → Senha do servidor **LDAP** de sua instituição.

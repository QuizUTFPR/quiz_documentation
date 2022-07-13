---
sidebar_position: 1
---

# Banco de Dados

Entre no diretório principal do projeto e realize a cópia do arquivo `mysql.env.example`.

:::danger Atenção

O nome de destino do arquivo copiado deve ser obrigatoriamente `mysql.dev`

:::

```bash
cd quizUTFPR
cp mysql.env.example mysql.env
```

Abra o arquivo `mysql.env` e preencha os seguintes valores:


```  title="frontend/.env"
MYSQL_ROOT_PASSWORD=
MYSQL_DATABASE=
```

Onde:

- `MYSQL_ROOT_PASSWORD` → Senha do usuário *root* do banco
- `MYSQL_DATABASE` → Nome do banco de dados onde serão armazenados as informações do sistema.

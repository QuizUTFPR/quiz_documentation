---
sidebar_position: 2
---

# Painel de Controle

Entre no diretório do `frontend` e realize a cópia do arquivo `.env.example`.

:::danger Atenção

O nome de destino do arquivo copiado deve ser obrigatoriamente `.env`

:::

```bash
cd quizUTFPR/frontend
cp .env.example .env
```

Abra o arquivo `.env` e preencha os seguintes valores:


```  title="frontend/.env"
REACT_APP_BASE_URL=
REACT_APP_TOKEN_PEXELS=
PORT=
```

Onde:

- `REACT_APP_BASE_URL` → URL da API (Backend)
- `REACT_APP_TOKEN_PEXELS` → Token da API do Pexels ([Como obter?](https://help.pexels.com/hc/en-us/articles/900004904026-How-do-I-get-an-API-key-)).
- `PORT` → Porta na qual o painel de controle será executado `DEFAULT=3000`

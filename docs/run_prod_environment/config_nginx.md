---
sidebar_position: 1
---

# Configurando arquivos Nginx

Para conseguirmos configurar o _proxy_ do sistema, devemos criar arquivos de configuração para cada servidor, ou seja, para o Painel de Controle e para a API (Backend).

## Configurando arquivo _host_ do Painel de Controle

Crie um arquivo dentro da pasta `nginx` utilizando o domínio do Painel de Controle como nome do arquivo. Por exemplo, caso a URL de acesso ao Painel de Controle for `painelcontrole.com.br`, deve-se criar um arquivo com o nome `painelcontrole.com.br`.

```bash title="quizUtfpr/nginx"
touch painelcontrole.com.br
```

Preencha o arquivo criado com o seguinte conteúdo:

:::info server_name
Coloque o domínio que será utilizado para acessar o Painel de Controle.
:::

```nginx title="painelcontrole.com.br"
server {
    server_name painelcontrole.com.br;
    listen 80;
    listen [::]:80;

    location ~ /.well-known {
        allow all;
    }

    location / {
        root /var/www/html/quiz;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
}
```

## Configurando arquivo _host_ da API (Backend)

Crie um arquivo dentro da pasta `nginx` utilizando o domínio da API como nome do arquivo. Por exemplo, caso a URL de acesso a API for `api.painelcontrole.com.br`, deve-se criar um arquivo com o nome `api.painelcontrole.com.br`.

```bash title="quizUtfpr/nginx"
touch api.painelcontrole.com.br
```

Preencha o arquivo criado com o seguinte conteúdo:

:::info server_name
Coloque o domínio que será utilizado para acessar a API.
:::

:::info proxy_pass
Lembre-se de informar a porta correta onde o servidor da API (Backend) está rodando.
:::

```nginx title="api.painelcontrole.com.br"
server {
    server_name api.painelcontrole.com.br;
    listen 80;
    listen [::]:80;

    location ~ /.well-known {
        allow all;
    }

    client_max_body_size 25M;
    location / {
        #add_header Access-Control-Allow-Origin *;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_pass http://127.0.0.1:3334;
    }
}
```

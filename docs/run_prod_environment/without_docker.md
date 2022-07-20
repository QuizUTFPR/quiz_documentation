---
sidebar_position: 3
---

# Rodar sem Docker

Para conseguir rodar o projeto em modo produção em sua máquina, instale as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/) versão v16.16.0.
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) (opcional).
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- [PM2](https://pm2.keymetrics.io/)

:::caution Atenção
Lembre-se de configurar as variáveis de ambiente para o [Painel de Controle](../environment_variables/frontend.md), a [API (Backend)](../environment_variables/backend.md) e para o [Aplicativo Smartphone](./../environment_variables/mobile.md).
:::

:::caution

Lembre-se de configurar os arquivos de _hosts_ utilizados pelo Nginx. [Clique aqui](./config_nginx.md) para visualizar a configuração.

:::

## Realizar `deploy` do Painel de Controle

Para colocar o Painel de Controle em modo produção, devemos executar os seguintes comandos:

```bash title="npm"
  cd frontend
  npm install --omit=dev
  npm run build
```

```bash title="yarn"
  cd frontend
  yarn install --production=true
  yarn build
```

## Realizar `deploy` da API (Backend)

Para colocar o Painel de Controle em modo produção, devemos executar os seguintes comandos:

Primeiramente, é necessário instalar as dependências de produção com os seguintes comandos:

```bash title="npm"
  cd backend
  npm install --omit=dev
```

```bash title="yarn"
  cd backend
  yarn install --production=true
```

Por fim, basta executar o servidor utilizando o gerenciador de processos **PM2**.

```bash title="npm"
  pm2 start "npm run prod" --name api
```

```bash title="yarn"
  pm2 start "yarn prod" --name api
```

## Configuração dos certificados SSL

Com a utilização do _script_ `setup_only_nginx.sh` é possivel configurar os certificados do Painel de Controle e da API (Backend). Tal _script_ realiza os seguintes passos:

- Instalação do _Nginx_.
- Configuração do _Proxy_.
- Configuração dos certificados SSL.
- Agendamente mensal de renovação dos certificados SSL.

Por fim, basta executar os seguintes comandos:

:::tip Atenção
Será necessário informar o domínio utilizado para o Painel de Controle (Frontend) e para a API (Backend). Assim como, um e-mail para a configuração dos certificados SSL.
:::

```bash title="setup_only_nginx.sh"
chmod +x ./setup_only_nginx.sh
./setup_only_nginx.sh
```

## Atualizar `deploy` do Painel de Controle

Utilize o _script_ `update_frontend_production.sh` para realizar a atualização do Painel de Controle caso efetue alguma modificação após o mesmo já estar funcionando no servidor. O _script_ realiza as seguintes ações:

- Instala as dependências caso exista alguma faltante.
- Realiza o processo de build do Painel de Controle.
- Copia os arquivos gerados para a pasta `/var/www/html/quiz` (pasta root padrão da configuração dos arquivos de _hosts_ do Nginx).

Sendo assim, para executar o _script_ basta executar os seguintes comandos:

```bash
chmod +x ./update_frontend_production.sh
./update_frontend_production.sh
```

## Atualizar `deploy` da API (Backend)

Caso deseje atualizar a API no servidor onde a mesma está hospedada, basta executar o seguinte comando do **PM2**:

:::tip Atenção
Note que o comando abaixo está aplicando o _reload_ para o processo com o nome `api`. Você deverá utilizar o nome escolhido no passo [Realizar `deploy` da API (Backend)](#realizar-deploy-da-api-backend).
:::

```bash
pm2 reload api
```

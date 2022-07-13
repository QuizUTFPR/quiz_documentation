---
sidebar_position: 2
---

# Rodar sem Docker

Para conseguir rodar o projeto em modo produção em sua máquina, instale as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/) versão v16.16.0.
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) (opcional).
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- [PM2](https://pm2.keymetrics.io/)

:::tip Atenção
Lembre-se de configurar as variáveis de ambiente para o [Painel de Controle](../environment_variables/frontend.md), a [API (Backend)](../environment_variables/backend.md) e para o [Aplicativo Smartphone](./../environment_variables/mobile.md).
:::

## Realizar `deploy` do Painel de Controle

Para colocar o Painel de Controle em modo produção, devemos executar os seguintes comandos:

:::tip Atenção
Lembre-se de configurar as variáveis de ambiente do [Painel de Controle](../environment_variables/frontend.md).
:::

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

:::tip Atenção
Lembre-se de configurar as variáveis de ambiente da [API (Backend)](../environment_variables/backend.md).
:::

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

Com a utilização do _script_ `setup_only_nginx.sh` é possivel configurar os certificados do Painel de Controle e da API (Backend).

- Instalação do _Nginx_.
- Configuração do _Proxy_.
- Configuração dos certificados SSL.
- Agendamente mensal de renovação dos certificados SSL.

Por fim, basta executar os seguintes comandos:

:::danger Atenção
Será necessário informar o domínio utilizado para o Painel de Controle (Frontend) e para a API (Backend). Assim como, um e-mail para a configuração dos certificados SSL.
:::

```bash title="setup_only_nginx.sh"
chmod +x ./setup_only_nginx.sh
./setup_only_nginx.sh
```

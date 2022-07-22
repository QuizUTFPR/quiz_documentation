---
sidebar_position: 2
---

# Rodar sem Docker

Para conseguir rodar o projeto em sua máquina, instale as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/) versão v16.16.0.
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) (opcional).
- [Android Studio](https://developer.android.com/studio/install?hl=pt-br) (caso não utilize um dispositivo físico)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)

:::caution Atenção
Lembre-se de configurar as variáveis de ambiente para o [Painel de Controle](../environment_variables/frontend.md), a [API (Backend)](../environment_variables/backend.md) e para o [Aplicativo Móvel](./../environment_variables/mobile.md).
:::

## Iniciar o Painel de Controle

Para iniciar o painel de controle é necessário instalar as dependências, sendo assim, siga os seguintes passos:

```bash title="npm"
cd frontend
npm i
```

```bash title="yarn"
cd frontend
yarn
```

Após isso, basta executar o comando de iniciar o servidor.

```bash title="npm"
npm run start
```

```bash title="yarn"
yarn start
```

## Iniciar a API (Backend)

Para iniciar a API é necessário instalar as dependências, sendo assim, siga os seguintes passos:

```bash title="npm"
cd backend
npm i
```

```bash title="yarn"
cd backend
yarn
```

Posteriormente, necessitamos realizar a execução do comando que irá montar todas as tabelas do banco de dados.

```bash title="npm"
npm run migrate
```

```bash title="yarn"
yarn migrate
```

Por fim, basta executar o comando de iniciar o servidor.

```bash title="npm"
npm run dev
```

```bash title="yarn"
yarn dev
```

## Iniciar o Aplicativo Móvel

Para iniciar a aplicação Móvel é necessário instalar as dependências, sendo assim, siga os seguintes passos:

```bash title="npm"
cd mobile
npm i
```

```bash title="yarn"
cd mobile
yarn
```

Posteriormente, para executar o aplicativo será necessário possuir em mãos um celular ou um emulador. Sendo assim, execute o seguinte comando:

:::tip Rodar em seu Dispositivo
Para rodar o aplicativo em seu dispositivo físico, basta seguir as instruções [clicando aqui](https://docs.expo.dev/guides/testing-on-devices/).
:::

```bash title="npm"
npm run start
```

```bash title="yarn"
yarn start
```

<!-- ## Como realizar o `build` do Painel de Controle?

Para obter os arquivos necessários para colocar o Painel de Controle em produção, basta executar os seguintes comandos:

```bash title="npm"
cd frontend
npm run build
```

```bash title="yarn"
cd frontend
yarn build
```

## Como executar a API em modo de produção?

Para executar o servidor _backend_ em modo produção, basta executar os seguintes comandos:

```bash title="npm"
cd backend
npm run prod
```

```bash title="yarn"
cd backend
yarn prod
``` -->

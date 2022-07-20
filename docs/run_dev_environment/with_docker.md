---
sidebar_position: 1
---

# Rodar com Docker

Uma das formas de rodar todo o projeto em ambiente de desenvolvimento é utilizando o `docker` e `docker-compose`. Caso não tenha instalado em sua máquina, execute o seguinte _script_ presente na pasta principal do repositório oficial do projeto.

```bash title="install_docker.sh"
chmod +x ./install_docker.sh
./install_docker.sh
```

## Configurando arquivo `docker-compose`

Para executar todos os contêineres, primeiramente realize a cópia do arquivo `docker-compose-dev-example.yml`, renomeando o mesmo para `docker-compose-dev.yml`.

```bash
cp docker-compose-dev-example.yml docker-compose-dev.yml
```

## Iniciar Painel de Controle e API (Backend)

Por fim, execute o seguinte comando para executar todo o sistema:

:::caution Atenção
Lembre-se de configurar as variáveis de ambiente para o [Painel de Controle](../environment_variables/frontend.md), a [API (Backend)](../environment_variables/backend.md) e para o [Aplicativo Smartphone](./../environment_variables/mobile.md).
:::

```bash
docker-compose -f docker-compose-dev.yml up -d --build
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

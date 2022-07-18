---
sidebar_position: 2
---

# Rodar com Docker

Uma das formas de rodar todo o projeto em ambiente de produção é utilizando o `docker` e `docker-compose`. Caso não tenha instalado em sua máquina, execute o seguinte _script_ presente na pasta principal do repositório oficial do projeto.

```bash title="install_docker.sh"
chmod +x ./install_docker.sh
./install_docker.sh
```

## Configurando arquivo `docker-compose`

Para executar todos os contêineres, primeiramente realize a cópia do arquivo `docker-compose-prod-only-api-example.yml`, renomeando o mesmo para `docker-compose-prod-only-api.yml`.

```bash
cp docker-compose-prod-only-api-example.yml docker-compose-prod-only-api.yml
```

:::caution

Lembre-se de configurar os arquivos de _hosts_ utilizados pelo Nginx. [Clique aqui](./config_nginx.md) para visualizar a configuração.

:::

## Realizar `deploy` do Painel de Controle e API (Backend)

Com a utilização do _script_ `setup_all.sh` é possivel colocar em produção tanto o Painel de Controle quanto a API com somente um comando. Este arquivo realizá os seguintes passos:

- Instalação do `docker` e `docker-compose`.
- Instalação e configuração da versão do `node v16.0.0`.
- Realização do processo de _build_ do Painel de Controle.
- Realização do processo de _build_ da API (Backend).
- Instalação do _Nginx_.
- Configuração do _Proxy_.
- Configuração dos certificados SSL.
- Agendamente mensal de renovação dos certificados SSL.

:::caution Atenção
Lembre-se de configurar as variáveis de ambiente do [Painel de Controle](../environment_variables/frontend.md) e da [API (Backend)](../environment_variables/backend.md).
:::

Por fim, basta executar os seguintes comandos:

:::tip Atenção
Será necessário informar o domínio utilizado para o Painel de Controle (Frontend) e para a API (Backend). Assim como, um e-mail para a configuração dos certificados SSL.
:::

```bash title="setup_all.sh"
chmod +x ./setup_all.sh
./setup_all.sh
```

## Realizar `deploy` somente do Painel de Controle

Com a utilização do _script_ `setup_only_frontend.sh` é possivel colocar em produção o Painel de Controle com somente um comando. Este arquivo realizá os seguintes passos:

- Instalação e configuração da versão do `node v16.0.0`.
- Realização do processo de _build_ do Painel de Controle.
- Instalação do _Nginx_.
- Configuração do _Proxy_.
- Configuração dos certificados SSL.
- Agendamente mensal de renovação dos certificados SSL.

:::caution Atenção
Lembre-se de configurar as variáveis de ambiente do [Painel de Controle](../environment_variables/frontend.md).
:::

Por fim, basta executar os seguintes comandos:

:::tip Atenção
Será necessário informar o domínio utilizado para o Painel de Controle (Frontend). Assim como, um e-mail para a configuração dos certificados SSL.
:::

```bash title="setup_only_frontend.sh"
chmod +x ./setup_only_frontend.sh
./setup_only_frontend.sh
```

## Realizar `deploy` somente da API (Backend)

Com a utilização do _script_ `setup_only_backend.sh` é possivel colocar em produção a API com somente um comando. Este arquivo realizá os seguintes passos:

- Instalação do `docker` e `docker-compose`.
- Instalação e configuração da versão do `node v16.0.0`.
- Realização do processo de _build_ da API (Backend).
- Instalação do _Nginx_.
- Configuração do _Proxy_.
- Configuração dos certificados SSL.
- Agendamente mensal de renovação dos certificados SSL.

:::caution Atenção
Lembre-se de configurar as variáveis de ambiente da [API (Backend)](../environment_variables/backend.md).
:::

Por fim, basta executar os seguintes comandos:

:::tip Atenção
Será necessário informar o domínio utilizado para a API (Backend). Assim como, um e-mail para a configuração dos certificados SSL.
:::

```bash title="setup_only_backend.sh"
chmod +x ./setup_only_backend.sh
./setup_only_backend.sh
```

## Atualizar `deploy` do Painel de Controle

Utilize o script `update_frontend_production.sh` para realizar a atualização do Painel de Controle caso efetue alguma modificação após o mesmo já estar funcionando no servidor. O script realiza as seguintes ações:

- Instala as dependências caso exista alguma faltante.
- Realiza o processo de build do Painel de Controle.
- Copia os arquivos gerados para a pasta `/var/www/html/quiz` (pasta root padrão da configuração dos arquivos de _hosts_ do Nginx).

Sendo assim, para executar o _script_ basta executar os seguintes comandos:

```bash
chmod +x ./update_frontend_production.sh
./update_frontend_production.sh
```

## Atualizar `deploy` da API (Backend)

Utilize o script `update_backend_production.sh` para realizar a atualização da API (Backend) caso realize alguma modificação após a mesma já estar funcionando no servidor. O script realiza as seguintes ações:

- Para o container da API (Backend).
- Inicia novamente o container da API (Backend).

Sendo assim, para executar o _script_ basta executar os seguintes comandos:

```bash
chmod +x ./update_backend_production.sh
./update_backend_production.sh
```

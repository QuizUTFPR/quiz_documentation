---
sidebar_position: 1
---

# Rodar com Docker

Uma das formas de rodar todo o projeto em ambiente de desenvolvimento é utilizando o `docker` e `docker-compose`. Caso não tenha instalado em sua máquina, execute o seguinte *script* presente na pasta principal do repositório oficial do projeto.

```bash title="install_docker.sh"
chmod +x ./install_docker.sh
./install_docker.sh
```

## Inicializando o Ambiente de Desenvolvimento

Para executar todos os contêineres, primeiramente realize a cópia do arquivo `docker-compose-dev-example.yml`, renomeando o mesmo para `docker-compose-dev.yml`.

```bash
cp docker-compose-dev-example.yml docker-compose-dev.yml
```

Por fim, execute o seguinte comando para executar todo o sistema:

```bash
docker-compose -f docker-compose-dev.yml up -d --build
```

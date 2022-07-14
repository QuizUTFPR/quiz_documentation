---
slug: resumo-projeto
title: Resumo do Projeto
description: O que é o Quiz Gamificado UTFPR.
authors: [jessepires, jhonatancunha]
tags: [quiz, utfpr]
---

![Docusaurus Plushie](./capa.png)

O projeto é uma plataforma web e móvel para criação e análise de avaliações digitais. O sistema está sendo criado sob orientação dos professores Juliano Henrique Foleis e Marcos Silvano Almeida. O mesmo é composto por um painel de controle utilizado para criação de quizzes, bem como um aplicativo móvel gamificado para que os alunos possam acessá-los e respondê-los.

Além disso, o painel de controle também possui uma seção de análise das repostas com algumas opções de filtragem das informações. Tal filtragem visa dar mais opções de visualização dos dados, permitindo a extração de mais informações.

A plataforma web conta com um sistema de turmas tanto públicas quanto privadas. Isso para que o criador do quiz tenha um controle sobre as pessoas que o estão respondendo. Na aplicação móvel, é possível que o usuário se inscreva na turma e responda os quizzes que estão anexados nela.

Os estudantes, na aplicação móvel, possuem acesso a um sistema de ranqueamento. Este último oferece uma gamificação como forma de motivação para um maior empenho na reposta dos quizzes.

Outra funcionalidade existente na plataforma web é a criação de um banco de questões. Nele é possível que o usuário adicione sua questão criada a este banco, permitindo que ele as reutilize em outros quizzes.

## Resumo de Features

#### 🧑‍🏫 Professor

- Login via LDAP (_Lightweight Directory Access Protocol_).
- Gerenciamento de Turmas.
- Gerenciamento de Quizzes.
- Banco de Questões Pessoal Disponíveis para Criação dos Quizzes.
- Busca Personalizada de Questões por Tags.
- Disponibilização de PIN para Quizzes/Turmas.
- Estatísticas dos Quizzes:
  - Visualização por meio de Gráficos.
  - Filtragem por Turmas:
    - Turma Especifica.
    - Geral.
  - Filtragem dos Scores:
    - Melhor Tentativa.
    - Pior Tentativa.
    - Primeira Tentativa.

#### 🧑‍🎓 Aluno

- Login via LDAP.
- Busca Personalizada de Quizzes por Tags.
- Acesso a Turmas por meio do PIN.
- Busca de Quizzes por meio de PIN.
- Escolha de Nickname e Avatares.
- Marcação de Quiz como Favorito.
- Pesquisa de Turmas Públicas.
- Ranqueamento de Respostas dos Quizzes para Gamificação.
  - Ranking por Turma.
  - Ranking por Quiz.
  - Ranking Geral.

## :bug: Bugs e Sugestões

Encontrou algum problema ou possui alguma sugestão para a melhoria do projeto? Por favor, siga os seguintes passos:

1. Pesquise se já existe alguma issue fechada ou aberta sobre o assunto na ferramenta de [Issue Tracker](https://github.com/jhonatancunha/quizUTFPR/issues).
2. Caso não encontrar nenhuma issue sobre o assunto, por favor, crie uma [issue](https://github.com/jhonatancunha/quizUTFPR/issues/new) sobre o bug ou sugestão.
3. Inclua na issue as tags referentes ao assunto abordado:
   - **feature** - Utilizada para indicar uma sugestão de melhoria para o projeto.
   - **bug** - Discussão aberta para informar sobre um possivel bug presente na aplicação.

## :interrobang: Como contribuir?

Primeiramente, gostaria de agradecer pelo interesse em contribuir para o crescimento deste projeto. Doravante, para realizar sua contribuição, você poderá abrir um [pull request](https://help.github.com/articles/about-pull-requests/) enviando suas alterações. Por favor, siga os seguintes passos:

1. Crie um [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) do projeto e clone seu fork:

```
$ git clone https://github.com/jhonatancunha/quizUTFPR.git
$ cd quizUTFPR
```

2. Crie uma nova branch que conterá suas alterações:

```
$ git checkout -b <nome-descritivo-da-alteracao>
```

3. Após realizar as alterações, faça um commit para seu repositório:

```
$ git commit -m "titulo do commit" -m "descrição das alterações"
$ git push origin <nome-da-branch>
```

4. Abra um [Pull Request](https://help.github.com/articles/about-pull-requests/) para a branch _development_. O mesmo deverá com um título claro e uma descrição contendo todas as alterações feitas.

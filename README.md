# AlanaFlix

## 💻 Sobre o projeto

O projeto AlanaFlix foi desenvolvido durante a primeira [Imersão React](https://site.alura.com.br/imersao) da [Alura](https://www.alura.com.br) em 2020, que contou com 5 aulas práticas para criar e colocar no ar uma aplicação React.

É um repositório de vídeos dividido por categorias, podemos adicionar novos vídeos e adicionar novas categorias escolhendo uma cor para ela. 

<!-- Atualização: a base de dados da aplicação foi mudada do [Heroku](https://www.heroku.com/) para o [Firebase](https://firebase.google.com/). -->

<div align="center">
    <img src="./src/assets/imagens/AlanaFlix.gif" alt="Gif da tela do AlanaFlix" width="100%"/>
</div>

<!-- 🌐 [Acessar AlanaFlix](https://alanaflix.alanabacco.vercel.app/) -->

### Funcionalidades

- Tela inicial com os vídeos;
- Adicionar novo vídeo;
- Adicionar nova categoria.

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
  <!-- - [Firebase](https://firebase.google.com/) -->
  <!-- - [Heroku](https://www.heroku.com/) -->

## 🔥 Como executar o projeto localmente

Para executar o projeto de maneira local, execute os comandos:

```sh
git clone https://github.com/alanabacco/alanaflix
cd alanaflix
npm install
npm run dev
```

O navegador irá abrir em 'https://localhost:3000'.

## 🚧 Melhorias a serem feitas:

[X] Separar Styled Components <br />
[X] Colocar ícone de loading <br />
[X] Checar responsividade <br />
[ ] Passar para TypeScript <br />
[ ] Colocar títulos dos vídeos embaixo deles <br />
[ ] Criar testes <br />
[ ] Fazer Backend em NodeJS <br />
[ ] Completar o que falta do CRUD <br />
[ ] Ter diferentes usuários

---

Desenvolvido por [Alana Bacco](https://github.com/alanabacco). <br />
[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alana-bacco/)](https://www.linkedin.com/in/alana-bacco/)

<!--
Notas:
- Para trocar os dados no firebase é só importar um arquivo json
com os novos dados no próprio realtime database do firebase (aqui no projeto, arquivo db.json)

- Tirei o firebase pois ao cadastrar um novo vídeo, o id não segue a ordem númerica, TODO.
-->

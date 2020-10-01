---
path: /testes-em-uma-aplicacao-react-parte-1-testes-unitarios
title: "Testes em uma aplicação React: Parte 1 - Testes unitários"
subTitle: Vamos aprender o que são testes unitários e como utilizá-lo em um projeto real usando jest e react.
date: 2020-09-28
folder:
  - react
  - tests
tags:
  - react
  - react-tutorial
  - tutorial
  - javascript
  - js
  - jest
  - tdd
  - tests

banner:
  author: Ferenc Almasi
  href: https://unsplash.com/photos/EWLHA4T-mso
  image: ./images/banner.jpg
---

Testar nossas aplicações é algo de exterma importância e agrega muito valor ao produto final que estamos desenvolvendo. Pretendo passar pro alguns topicos relacionados a como testar uma aplicação, usando como exemplo uma pequena aplicação: **conversão de moedas estrangeiras** feita em react.

Abordaremos pontos como **testes unitários**, **testes de integração**, **jest**, **testing-library/react**, **mocks** e testar funcionalidades **assíncronas**.

---

### Antes de começar!!!

Vamos utilizar nessa série de tutoriais, uma pequena aplicação desenvolvida em react. Uma aplicação que converte moedas estrangeiras.

![Foreign Currency Converter](./images/app.jpg)

Você pode clonar o projeto **final** pelo seguinte [repositório](https://github.com/alexandreservian/foreign-currency-converter). Para focarmos mais nos testes, todos os componentes já foram criados. E para usar somente os componentes sem os testes, basta utilizar `git checkout 1.0.0`.

Agora somente com todos os componentes em maões podemos começar nosso tutorial :)

### O que é TDD?

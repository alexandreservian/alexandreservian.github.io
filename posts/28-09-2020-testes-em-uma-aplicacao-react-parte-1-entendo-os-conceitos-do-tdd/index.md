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
  - testes-unitarios
  - testes-de-integracao

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

### O são testes unitários?

Vamos imaginar os **contextos** resumidos de software, suas camadas, suas apis, sua ui quando por exemplo se trabalha com desenvolvimento front-end ou mobile. Nesta grama de contextos de códigos, podemos ter uma **granulação** ainda maior, pois seu programa vai ser escrito a partir de vários pequenos pedaços de outros códigos como **funções** e **classes** que podem interagir entre si. Gosto da analogia da construção de um software relacionado a peças de lego, onde cada peça de lego é uma função ou classe que podemos encaixar umas às outras para criar uma peça maior, e essas peças maiores podem por sua vez se conectar a outras peças menores ou mesmo outras maiores.

Com isso em mente, podemos voltar a nossa pequena unidade de código que deve representar um código de **responsabilidade única**, pois é exatamente nela que se aplicam os **testes unitários**. Esse teste visa testar se uma função ou método de uma classe tem **sempre** uma resultado **constante esperado**. Podemos relacionar simplismente assim: dado um valor **x** como input de uma função, a mesma deve sempre retorna **y** em seu output.

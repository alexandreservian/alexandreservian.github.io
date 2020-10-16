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

## Antes de começar!!!

Vamos utilizar nessa série de tutoriais, uma pequena aplicação desenvolvida em react. Uma aplicação que converte moedas estrangeiras.

![Foreign Currency Converter](./images/app.jpg)

Você pode clonar o projeto **final** pelo seguinte [repositório](https://github.com/alexandreservian/foreign-currency-converter). Para focarmos mais nos testes, todos os componentes já foram criados. E para usar somente os componentes sem os testes, basta utilizar `git checkout 1.0.0`.

Agora somente com todos os componentes em maões podemos começar nosso tutorial :)

> Em todos os testes daqui para frente usaremos **jest**, que é um poderoso **framework** de teste focando na simplicidade. Como estamos usando o **CRA**, ele já vem instalado e configurado com o **jest**.

## O são testes unitários?

Vamos imaginar os **contextos** resumidos de software, suas camadas, suas apis, sua ui quando por exemplo se trabalha com desenvolvimento front-end ou mobile. Nesta grama de contextos de códigos, podemos ter uma **granulação** ainda maior, pois seu programa vai ser escrito a partir de vários pequenos pedaços de outros códigos como **funções** e **classes** que podem interagir entre si. Gosto da analogia da construção de um software relacionado a peças de lego, onde cada peça de lego é uma função ou classe que podemos encaixar umas às outras para criar uma peça maior, e essas peças maiores podem por sua vez se conectar a outras peças menores ou mesmo outras maiores.

Com isso em mente, podemos voltar a nossa pequena unidade de código que deve representar um código de **responsabilidade única**, pois é exatamente nela que se aplicam os **testes unitários**. Esse teste visa testar se uma função ou método de uma classe tem **sempre** uma resultado **constante esperado**. Podemos relacionar simplismente assim: dado um valor **x** como input de uma função, a mesma deve sempre retorna **y** em seu output.

## Criando nosso primeiro teste unitário

Vamos criar na uma nova pasta no projeto em `src` chamada `utils`. Nela vamos criar o código para **converter** nossas moedas selecionadas. Vamos criar uma nova pasta, `currency-converter`, e dentro da mesma crie dois arquivos: `index.js` que vai conter o nosso código e o `index.spec.js` que será nossa suíte de testes.

> **Suíte de testes** se designa para relacionar um **agrupamento** de testes. No **jest** cada arquivo é considerado uma suíte de testes.

> Podemos serapar nossos testes de algumas maneiras, como criar eles dentro de um ditério `__tests__`, ou usando o sufixo `.test` ou `.spec`. Nós em nossos exemplos, optaremos por `.spec`.

Vamos começar pelo nosso arquivo de teste, `index.spec.js`, importando nosso codigo, iniciaremos agrupando nossos testes com a global `describe`. O `describe` não é necessário, porém é interessante quando queremos **organizar** nossos testes em **grupos**.

Dentro do `describe`, criaremos nosso primeiro teste de fato, usando a função `it`. Sendo `it` um **alias** para a função `test`. Vejamos nosso código inicial:

```javascript
import currencyConverter from "./"

describe("Currency Converter", () => {
  it("should return 12 when params are 2 and 6", () => {
    const current = currencyConverter()
    const expected = 12

    expect(current).toEqual(expected)
  })
})
```

Criado nosso teste, basta rodar o comando `yarn test`. O teste não irar passar, primeiramente porque não criamos a função e a exportamos no `index.js`. Vamos cria-lo:

```javascript
const currencyConverter = () => {}

export default currencyConverter
```

Rode novamente o teste, e o teste novamente ira quebrar. Bem, esse é um dos principios do **TDD**(desenvolvimento guiado por testes). O foco dessa sequencia de posts não é focar em **TDD**, porém vou ilustra-lo rapidamente. Ele conquiste em um ciclo de desenvolvimento, onde sempre iniciamos nosso desenvolvimento pelos testes. Como iniciamos o desenvolvimento por um teste, o mesmo **não** irá passar. Após escrever o teste e roda-lo, podemos fazer uma pequena implementação que consiste em fazer o teste passar.

```javascript
const currencyConverter = () => 12

export default currencyConverter
```

Para sofrer menos, podemos usar o comando `yarn test --watch` para que a cada alteração em nosso código, o jest rodarar novamente nossos testes. Com essa pequena alteração percebemos que nosso codigo passou. Podemos considerar esse passo somente para rodar nosso teste. O proximo passo seguindo o TDD será a refatoração do nosso código.

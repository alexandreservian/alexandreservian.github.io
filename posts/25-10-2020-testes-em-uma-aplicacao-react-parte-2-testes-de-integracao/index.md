---
path: /testes-em-uma-aplicacao-react-parte-2-testes-de-integracao
title: "Testes em uma aplicação React: Parte 2 - Testes de integração"
subTitle: Vamos aprender o que são testes de integração e usá-los em uma aplicação real em react.
date: 2020-10-25
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
  author: Esther Jiao
  href: https://unsplash.com/photos/3HqSeexXYpQ
  image: ./images/banner.jpg
---

No post [anterior](./testes-em-uma-aplicacao-react-parte-1-testes-unitarios) iniciamos os testes em nossa aplicação react. Passamos por uma definição de **testes unitários** e até vimos como se da o desenvolvimento guiado por testes o **TDD**.

Continuaremos pelo nosso tutorial com a aplicação de **conversão de moedas estrangeiras**. Acesse o [repositório](https://github.com/alexandreservian/foreign-currency-converter) e para continuar de onde paramos desde o post anterior, basta usar `git checkout 1.1.0`.

## O são testes de integração?

Em um sistema podemos ter vários níveis de testes, desde um teste unitário, que testa pequenas partes do nosso código até testes que testam toda aplicação de **ponta a ponta**. Podemos seraparar esses **conjuntos** de testes em uma **forma visual** conhecida como **pirâmide de testes**:

![The test Pyramid](./images/the-test-pyramid.jpg)

Nela podemos observar que quanto mais alto na pirâmide mais será a **integraçao** do software. Também podemos notar que na base da nossa pirâmide, os testes unitarios são mais rapidos para se desenvolver.

No meio da nossa pirâmide se encontra os testes de **integração**. Esses testes que visam testar a **integração** de classes, módulos ou funções entre si dentro de um **funcionalidade**. No fim avaliam se módulos criados como **unidades** se trabalhados em **conjunto** vão gerar um resultado esperado.

Os testes de integração se **diferem** dos testes **end-to-end**(E2E), pois nos testes E2E testamos **toda** aplicação, por exemplo, ele simula um usuário interagindo em todas as telas de um sistema. Já o teste de integração visa testar somente **uma** funcionalidade do sistema.

## Testes em componentes em react

Bem um **componente em react** nada mais é que uma **função**(é possivel escrever usando classe também) que retorna um ou vários **elementos DOM** que podem conter uma lógica de apresentação ou outras funções vinculadas a **eventos** do componente como um botão que tem eventos como `onClick`. Visto desse prisma, muitos autores do tema de teste ou nós programadores entram em debates sobre em qual contexto se encaixa o testes em **componente react**, até mesmo na [documentação](https://pt-br.reactjs.org/docs/testing.html#tradeoffs) sobre testes do react não tem uma conclusão precisa sobre o **assunto**. Acredito que testes nos componentes estão dentro da camada de **testes de integração**.

E para realizar estes testes nos componentes, vamos usar a lib **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)**. Ela fornece **utilitarios** que vão facilitar os nossos testes como por exemplo sua api de **[queries](https://testing-library.com/docs/dom-testing-library/api-queries)** que buscam elementos DOM no componente. Ela foca no componente e na interação do mesmo, sem se preocupar com detalhes da **implementação**. Ela já vem como default se você utiliza o **create-react-app**, se não, sua instalação é feita de forma simples, segue a **[documentação](https://testing-library.com/docs/dom-testing-library/install)**.

## Criando o nosso primeiro teste em componente react

Dentro da pasta `src/components/form-currency-converter` crie o arquivo `index.spec.js`. Vamos ao primeiro teste:

```javascript
import React from "react"
import { render } from "@testing-library/react"
import FormCurrencyConverter from "."

describe("Form Currency Converter", () => {
  it("should render component", () => {
    const { container } = createComponent()

    expect(container.firstChild).toBeInTheDocument()
  })
})

const createComponent = props => render(<FormCurrencyConverter {...props} />)
```

Neste primeiro teste podemos notar algumas funções, a primeira que vamos comentar é a função **render**. Ela é responsavel por renderizar o componente utilizando o [**JSDOM**](https://github.com/jsdom/jsdom) e devolver um objeto contendo diversas outras funções como **queries** para busca de elementos no **DOM** ou o objeto **container** que é um nó do **DOM** onde o componente react foi renderizado. O método **render** tem algumas [**opções**](https://testing-library.com/docs/react-testing-library/api#render-options), uma delas é justamente a definição do container da renderização, por default, o container será uma **div** onde o **RLT**(react library testing) vai chamar o método **append** do **document.body**.

> Para se obter o **root element**(o componente que foi renderizado dentro do **container**) basta usar **container.firstChild**.

A segunda função a ser comentada é o **custom matcher** **toBeInTheDocument**. Ele faz parte da library `@testing-library/jest-dom`. Essa [**library**](https://github.com/testing-library/jest-dom) tem objetivo de prover **custom matchers** para o **jest** que facilita a declaração dos nossos testes quando queremos testar o **estado do DOM**. Logo a **matcher** [**toBeInTheDocument**](https://github.com/testing-library/jest-dom#tobeinthedocument) válida está presente ou não no documento DOM.

### Referências:

- [A pirâmide de testes](https://medium.com/creditas-tech/a-pir%C3%A2mide-de-testes-a0faec465cc2)
- [Pirâmide de Testes — Definindo uma boa suíte de testes para seu Software](https://medium.com/luizalabs/pir%C3%A2mide-de-testes-definindo-uma-boa-su%C3%ADte-de-testes-para-seu-software-a6864886f29b)
- [Como mantemos a qualidade de software nos projetos do Luizalabs](https://medium.com/luizalabs/como-mantemos-a-qualidade-de-software-nos-projetos-do-luizalabs-413814a5c252)
- [How To Test Your React Apps With The React Testing Library](https://www.smashingmagazine.com/2020/07/react-apps-testing-library/)

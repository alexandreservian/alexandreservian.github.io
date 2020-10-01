---
path: /react-usando-tabela-virtual-para-lidar-com-grandes-quantidades-de-dados
title: "React: Usando Tabela virtual para lidar com grandes quantidades de dados"
subTitle: Vamos neste tutorial descobrir uma forma de lidar com muitos dados por meio de tabela.
date: 2020-02-13
folder:
  - dev
  - front-end
  - react
tags:
  - react
  - react-tutorial
  - tutorial
  - javascript
  - js
  - table

banner:
  author: Markus Spiske
  href: https://unsplash.com/photos/TaKB-4F58ek
  image: ./images/banner.jpg
---

Na minha carreira eu já tive que lidar com grandes volumes de dados, e muitas vezes esses dados eram apresentados em forma de **tabela**. Para abordar esse assunto recorrente em alguns projetos preparei esse **tutorial**.

---

Existem projetos que devemos expor muitos dados na tela do usuário, seja em forma de lista ou tabela. Isso é bastante recorrente quando estamos construindo por exemplo **dashboards**. Em muitas situações a **api** que consumimos os dados vai prover alguma funcionalidade de **paginação**. Porém existe alguns projetos que essa funcionalidade não existe, e isso é um desafio que temos que lidar. Algumas vezes esses **endpoints** podem gerar grandes cargas de dados. Vamos imaginar uma situação em que um endpoint com essa característica possa gerar de **100**, **1000** ou **10.000** linhas de registro, isso em só uma chamada.

O grande problema nessas situações é ter que lidar com api **DOM** do browser. Além do seu acesso ser lento, ter essa grande quantidade de elementos DOM na pagina levará a gargalos de performance.

Mesmo que neste tipo de projeto você esteja usando **react**, que lida a primeira vista com o **DOM virtual**, no final ele vai acabar usando o **render** e criando os elementos no **DOM real**.

Mas existe uma boa alternativa para essas situações, que é usar **componentes virtuais**. Seu comportamento se define em renderizar os elementos por **demanda**. Usando nosso exemplo anterior de lidar com 1000 linhas de registro por exemplo, uma tabela que usa esse conceito, só ira renderizar os primeiros 20 elementos, a partir do momento que o usuário der **scroll** nesta tabela, ela irá **renderizar** os próximos 20 elementos e **destruirá** os 20 anteriores. E a **cada** evento de scroll o processo se **repete**. Em resumo, a tabela só **renderiza** oque é **visível** para o usuário, claro o número de elemento renderizados pode variar de acordo com o **height** dos elementos e da **tabela**. No final só renderizamos 20 itens dos 1000 registros. Isso é um ganho enorme de performance em sua aplicação.

Agora veremos um tutorial exemplificando este conceito.

---

### Tabela Virtualizada

Existem muitos componentes no mundo react que possuem esta função, uma bastante popular é o [react-virtualized](https://github.com/bvaughn/react-virtualized). Porém vamos usar o [react-base-table](https://github.com/Autodesk/react-base-table). Ele é bastante completo, além de ser focado somente em tabela, apresentando uma grande variedade de métodos e uma [api](https://autodesk.github.io/react-base-table/api/basetable/) simples e clara.

Para ilustrar uma grande quantidade de dados, eu optei por usar um arquivo contendo um array de 809 **pokemons**. Usei o json e as thumbs deste [projeto](https://github.com/fanzeyi/pokemon.json).

Podemos acessar o projeto completo: [react-table-example-pokemon](https://github.com/alexandreservian/react-table-example-pokemon). Agora irei pontuar os pontos principais do exemplo.

Primeiramente definimos as colunas da tabela:

```js
export default [
  {
    dataKey: "id",
    title: "Código",
    width: 100,
    sortable: true,
    align: "center",
  },
  {
    dataKey: "thumbnail",
    width: 100,
  },
  {
    dataKey: "name",
    title: "Nome",
    width: 110,
  },
]
```

Obs: Isso é só um trecho da definição das colunas, o restante pode ser acesso no [projeto final](https://github.com/alexandreservian/react-table-example-pokemon).

As definições são bem claras, delas a mais importante é a propriedade **dataKey**. Ela nos diz qual dado da tabela será mostrado naquela coluna. Para exemplificar melhor, vamos pegar do array contendo os pokemon um exemplo de objeto js contendo um pokemon:

```json
{
  "id": 150,
  "name": "Mewtwo",
  "thumbnail": "./assets/thumbnails/150.png",
  "type": ["Psychic"],
  "hp": 106,
  "attack": 110,
  "defense": 90,
  "spAttack": 154,
  "spDefense": 90,
  "speed": 130
}
```

Com esse exemplo vemos que o **dataKey** irá relacionar as chaves **id**, **name** e **thumbnail** do objeto do array. Na [documentação da coluna](https://autodesk.github.io/react-base-table/api/column/) ela ainda define que o dataKey consegue endereça até objetos aninhados.

Basicamente tendo a definição das colunas e os dados sua tabela já ira funcionar. Com um corpo de componente basicamente assim:

```js
const App = () => {
  return (
    <Table data={data}>
      {columnDefinition.map(({ dataKey, ...restProps }) => (
        <Column key={dataKey} dataKey={dataKey} {...restProps} />
      ))}
    </Table>
  )
}
```

Já no projeto final a estrutura fica mais ou menos assim:

```js
const App = () => {
  return (
    <Table
      data={data}
      loading={loading}
      rowKey="id"
      headerHeight={45}
      rowHeight={70}
      sortBy={sortBy}
      onColumnSort={handleOnColumnSort(data, setData, setSortBy)}
      onClickRow={handleOnClickRow(setSelectedRow)}
      onDoubleClickRow={handleOnDoubleClickRow}
      rowClassName={addClassNameRow(selectedRow)}
    >
      {columnDefinition.map(({ dataKey, ...restProps }) => (
        <Column key={dataKey} dataKey={dataKey} {...restProps} />
      ))}
    </Table>
  )
}
```

O **Table** mostrado acima é uma abstração do componente real. No código [completo](https://github.com/alexandreservian/react-table-example-pokemon/blob/master/src/components/table/table.js) é usado o componente **AutoResizer**, que torna a tabela adaptável a qualquer **height**.

Se quisermos personalizar as células da tabela basta mudar a prop **components** do componente **BaseTable**. Vamos a um exemplo:

```js
const Cell = ({ className, cellData, column }) => {
  const { dataKey } = column
  switch (dataKey) {
    case "thumbnail":
      return <Thumbnail src={cellData} />
    case "type":
      return <Types types={cellData} />
    default:
      return <div className={className}>{cellData}</div>
  }
}

export default {
  TableCell: Cell,
}
```

Basta ver que podemos adicionar componentes diversos baseado no nosso dataKey, porem o dataKey aqui foi usado como exemplo de possibilidade, pois na definição das colunas podemos adicionar qualquer propriedade. Podemos por exemplo adicionar a propriedade **type**, e ter types como **string**, **number** ou **boolean** e tratar as células de acordo com esses tipos.

---

Veja o resultado final:

<iframe
     src="https://codesandbox.io/embed/react-table-example-pokemon-p8fuh?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-table-example-pokemon"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Simulamos um carregamento assíncrono no componente App usando **setTimeout** no **useEffect** somente para fins didáticos. Vemos que antes do carregamento a tabela renderiza um componente de **Loading** no meio da tabela. Na tabela também podemos definir um componente para sinalizar que não há dados, podemos definir na prop **emptyRenderer** da **BaseTable**. No exemplo isso foi definido e pode ser usado.

Se abrimos o **devtools** do chrome e **inspecionarmos** a tabela, veremos as linhas da tabelas sendo criadas no momento do **scroll** ou na interação com as colunas que podem ser **ordenadas**.

---

### Conclusão

Essa é uma maneira de trabalhar com muitos dados em tela. Isso que é o interessante em programação de ter diversas maneiras de lidar com diversas situações.

Fica novamente a solução para esse problema:

- **[react-table-example-pokemon](https://github.com/alexandreservian/react-table-example-pokemon)**

Mais uma vez fico grato se ficaram até aqui, espero que tenha ajudado. Vlws.

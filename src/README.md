## Database

Estrutura do objeto **repository**: `{ id: Repository-(date)-(timestamp)-(random), name: ----, }`.
Além da indexedDB, o ID e o nome são salvos no localStorage com as chaves repositoryID, repository respectivamente.

Estrutura do objeto **question**: `{ id: Repository-(date)-(timestamp)-(random), name: ----, }`
```
  question: {
    id: Question-(timestamp)-(random),
    value: ----,
    number: ---,
    attributes:
    {
      type: [ alternative, text ],
      marker: [ marker, correct, erro ],
      time: --:--,
    },
    repositoryID: Repository-(date)-(timestamp)-(random)
  }
```
Além da indexedDB, o ID e o nome são salvos no localStorage com as chaves repositoryID, repository respectivamente.

`database` - Responsável por criar a estrutura do banco de dados caso não exista e fazer request
`root` -

## Storage

Conecta o banco de dados com o DOM, chamando o modulo "root" para base para obter, adicionar ou editar dados. Todas as funções do root possuem como parâmetro uma função chamada "back" que será executada após as alterações, obtendo como parâmetro o resultado da busca. A função utiliza o DOM para alterar diretamente os valores. Ademais, cada elemento adicionado após a inicialização é renderizado separadamente por meio do ReactDOM.render.

### Boas práticas

Pelas minhas pesquisas, acredito que as melhores práticas seria alterar os dados apenas pelo **useState**, contudo, os valores dos inputs são chamados de diversos componentes diferentes, como a navbar, dessa forma, o useState deveria ser declarado na raiz da pagina, deixando o programa mais **lento e complexo**. Alem disso, fica mais simples de alterar o valor após uma consulta ao indexedDB.

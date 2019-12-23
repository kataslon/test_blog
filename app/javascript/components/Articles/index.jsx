import React from 'react'
import { toJS } from 'mobx'
import { useObserver } from 'mobx-react'
import { Header, Table, Button } from 'semantic-ui-react'
import { useStores } from '../../utils/hooks'
import ArticleApi from '../../utils/ArticleApi'

const DestroyButton = ({id, collback}) => {
  return (
    <div>
      <Button
        negative
        size='mini'
        onClick={() => collback(id)}
      >
        Delete
      </Button>
    </div>
  )
}

const TableHeader = ({column, direction, handleSort}) => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell
          sorted={column === 'name' ? direction : null}
          onClick={handleSort('name')}
        >
          Name
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={column === 'text' ? direction : null}
          onClick={handleSort('text')}
        >
          Text
        </Table.HeaderCell>
        <Table.HeaderCell
          sorted={column === 'type' ? direction : null}
          onClick={handleSort('type')}
        >
          Type
        </Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  )
}

const TableRow = ({item, destroyAction}) => {
  return (
    <Table.Row>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.text}</Table.Cell>
      <Table.Cell>{item.kind.replace('_', ' ')}</Table.Cell>
      <Table.Cell>
        <DestroyButton
          id={item.id}
          collback={destroyAction}
        />
      </Table.Cell>
    </Table.Row>
  )
}

const Articles = () => {
  const {store} = useStores();
  const filteredArticles = toJS(useObserver(() => store.articleStore.filteredArticles))
  const filters = toJS(useObserver(() => store.filterStore.params))

  const api = new ArticleApi()

  const handleSort = (column) => () => {
    let params
    if (column === filters.column) {
      params = { direction: filters.direction === 'ascending' ? 'descending' : 'ascending',
                 column: column }
    } else {
      params = { direction: 'ascending', column: column }
    }
    store.filterStore.setParams(params)
  }

  return (
    <React.Fragment>
      <Header as='h1'>Articles</Header>
      <Table sortable celled fixed>
        <TableHeader
          column={filters.column}
          direction={filters.direction}
          handleSort={handleSort}
        />
        <Table.Body>
          {filteredArticles.map(item =>
            <TableRow
              item={item}
              key={item.id}
              destroyAction={api.destroyArticle}
            />)
          }
        </Table.Body>
      </Table>
    </React.Fragment>
  )
}

export default Articles

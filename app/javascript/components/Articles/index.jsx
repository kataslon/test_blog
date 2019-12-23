import React from 'react'
import { toJS } from 'mobx'
import { useObserver } from 'mobx-react'
import { Header, Table } from 'semantic-ui-react'
import { useStores } from '../../utils/hooks'
import ArticleApi from '../../utils/ArticleApi'

import TableHeader from './TableHeader'
import TableRow from './TableRow'

const Articles = () => {
  const {store} = useStores()
  const filteredArticles = toJS(useObserver(() => store.articleStore.filteredArticles))
  const filters = toJS(useObserver(() => store.filterStore.params))

  const api = new ArticleApi()

  const handleSort = (column) => () => {
    let params
    if (column === filters.column) {
      params = {
        direction: filters.direction === 'ascending' ? 'descending' : 'ascending',
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

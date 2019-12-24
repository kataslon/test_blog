import React from 'react'
import PropTypes from 'prop-types'
import { toJS } from 'mobx'
import { useObserver } from 'mobx-react'
import { Table } from 'semantic-ui-react'
import { useStores } from '../../utils/hooks'

import ArticleApi from '../../utils/ArticleApi'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

const ArticlesTable = ({articles}) => {
  const api = new ArticleApi()
  const {store} = useStores()
  const filters = toJS(useObserver(() => store.filterStore.params))

  const handleSort = (column) => () => {
    let params
    if (column === filters.column) {
      params = {
        direction: filters.direction === 'ascending' ? 'descending' : 'ascending',
        column: column }
    } else {
      params = { direction: 'ascending', column: column }
    }
    store.filterStore.setSortParams(params)
  }

  return (
    <Table sortable celled fixed>
      <TableHeader
        column={filters.column}
        direction={filters.direction}
        handleSort={handleSort}
      />
      <Table.Body>
        {articles.map(item =>
          <TableRow
            item={item}
            key={item.id}
            destroyAction={api.destroyArticle}
          />)
        }
      </Table.Body>
    </Table>
  )
}

ArticlesTable.propTypes = {
  articles: PropTypes.array.isRequired
}

export default ArticlesTable

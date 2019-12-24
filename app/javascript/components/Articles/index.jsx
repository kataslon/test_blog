import React from 'react'
import { toJS } from 'mobx'
import Select from 'react-select'
import { useObserver } from 'mobx-react'
import { Header, Input } from 'semantic-ui-react'
import { useStores } from '../../utils/hooks'

import ArticlesTable from './ArticlesTable'
import GroupedArticlesTable from './GroupedArticlesTable'

const Articles = () => {
  const {store} = useStores()
  const filteredArticles = toJS(useObserver(() => store.articleStore.filteredArticles))
  const filters = toJS(useObserver(() => store.filterStore.params))

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1)

  const articlePropertyOptions = ['not grouped', 'name', 'text', 'type'].map(key => {
    return { value: key, label: capitalize(key) }
  })

  return (
    <React.Fragment>
      <Header as='h1'>Articles</Header>
      <Input
        placeholder='Search by name'
        icon='search'
        value={filters.name}
        onChange={(e) => store.handleSearchByName(e.target.value)}
      />
      <Input
        placeholder='Search by text'
        icon='search'
        value={filters.text}
        onChange={(e) => store.handleSearchByText(e.target.value)}
      />
      <Select
        placeholder='Group by ...'
        options={articlePropertyOptions}
        value={filters.group_by}
        onChange={(val) => store.handleGrouping(val.value)}
      />
      {!store.articleStore.isArray ?
        <GroupedArticlesTable groupedArticles={filteredArticles} /> :
        <ArticlesTable articles={filteredArticles} />}
    </React.Fragment>
  )
}

export default Articles

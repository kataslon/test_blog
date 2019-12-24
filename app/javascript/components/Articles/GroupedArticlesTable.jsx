import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

import ArticlesTable from './ArticlesTable'

const GroupedArticlesTable = ({groupedArticles}) => {
  return (
    Object.entries(groupedArticles).map(([groupName, group]) => (
      <React.Fragment>
        <Header as='h3'>{groupName}</Header>
        <ArticlesTable articles={group} />
      </React.Fragment>
    ))
  )
}

GroupedArticlesTable.propTypes = {
  groupedArticles: PropTypes.object.isRequired
}

export default GroupedArticlesTable

import React from 'react'
import PropTypes from 'prop-types'
import { toJS } from 'mobx'

import ArticlesTable from './ArticlesTable'

const GroupedArticlesTable = ({groupedArticles}) => {
  return (
    Object.entries(groupedArticles).map(([groupName, group]) => (
      <React.Fragment>
        <div key={groupName}>{groupName}</div>
        <ArticlesTable articles={group} />
      </React.Fragment>
    ))
  )
}

GroupedArticlesTable.propTypes = {
  groupedArticles: PropTypes.object.isRequired
}

export default GroupedArticlesTable

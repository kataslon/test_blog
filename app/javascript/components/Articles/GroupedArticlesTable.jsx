import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

import ArticlesTable from './ArticlesTable'
import StoriesTable from './StoriesTable'

const GroupedArticlesTable = ({groupedArticles}) => {

  const articles = () => {
    return Object.entries(groupedArticles).map(([groupName, group]) => (
      <React.Fragment key={groupName}>
        <Header as='h3'>{groupName}</Header>
        <ArticlesTable articles={group} />
      </React.Fragment>
    ))
  }

  const isStoriesData = () => {
    const first = Object.entries(groupedArticles)[0]
    return !!first && !!first[1].story
  }

  return (
    <React.Fragment>
      {isStoriesData() ?
        <StoriesTable stories={groupedArticles}/> :
        articles()}
    </React.Fragment>
  )
}

GroupedArticlesTable.propTypes = {
  groupedArticles: PropTypes.object.isRequired
}

export default GroupedArticlesTable

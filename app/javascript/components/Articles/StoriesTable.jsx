import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

const TableHeader = () => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>StoryName</Table.HeaderCell>
        <Table.HeaderCell>Count of articles</Table.HeaderCell>
        <Table.HeaderCell>Count of article's types</Table.HeaderCell>
        <Table.HeaderCell>Last article name</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  )
}

const TableRow = ({item}) => {
  return (
    <Table.Row>
      <Table.Cell>{item[0]}</Table.Cell>
      <Table.Cell>{item[1].article_count}</Table.Cell>
      <Table.Cell>{item[1].type_count}</Table.Cell>
      <Table.Cell>{item[1].last_article.name}</Table.Cell>
    </Table.Row>
  )
}

const StoriesTable = ({stories}) => {
  return (
    <Table celled fixed>
      <TableHeader/>
      <Table.Body>
        {Object.entries(stories).map((item) =>
          <TableRow
            item={item}
            key={item[1].story.id}
          />)
        }
      </Table.Body>
    </Table>
  )
}

StoriesTable.propTypes = {
  stories: PropTypes.object.isRequired
}

export default StoriesTable

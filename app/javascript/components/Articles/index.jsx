import React from "react"
import PropTypes from "prop-types"
import { Header, Table } from "semantic-ui-react"

const Articles = ({ articles }) => {
  const renderTableHeader = () => {
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Text</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    )
  }

  const renderTableRow = (item) => {
    return (
      <Table.Row key={item.id}>
        <Table.Cell>{item.name}</Table.Cell>
        <Table.Cell>{item.text}</Table.Cell>
        <Table.Cell>{item.kind.replace('_', ' ')}</Table.Cell>
      </Table.Row>
    )
  }

  return (
    <React.Fragment>
      <Header as='h1'>Articles</Header>
      <Table celled>
        {renderTableHeader()}
        <Table.Body>
          {articles.map(item =>
            renderTableRow(item))
          }
        </Table.Body>
      </Table>
    </React.Fragment>
  )
}

Articles.propTypes = {
  articles: PropTypes.array
};

export default Articles

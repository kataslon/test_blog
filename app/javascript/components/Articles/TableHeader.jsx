import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

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
          sorted={column === 'kind' ? direction : null}
          onClick={handleSort('kind')}
        >
          Type
        </Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  )
}

TableHeader.propTypes = {
  column: PropTypes.string,
  direction: PropTypes.string,
  handleSort: PropTypes.func.isRequired
}

export default TableHeader

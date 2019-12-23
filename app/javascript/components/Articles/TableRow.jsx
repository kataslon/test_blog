import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

import DestroyButton from './DestroyButton'

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

TableRow.propTypes = {
  item: PropTypes.object.isRequired,
  destroyAction: PropTypes.func.isRequired
}

export default TableRow

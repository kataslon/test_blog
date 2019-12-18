import React from "react"
import PropTypes from "prop-types"
import { useObserver } from "mobx-react"
import { Header, Table } from "semantic-ui-react"
import { useStores } from "../../utils/hooks"

const TableHeader = () => {
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

const TableRow = ({item}) => {
  return (
    <Table.Row>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.text}</Table.Cell>
      <Table.Cell>{item.kind.replace('_', ' ')}</Table.Cell>
    </Table.Row>
  )
}

const Articles = () => {
  const {store} = useStores();
  const articles = useObserver(() => store.articles)
  return (
    <React.Fragment>
      <Header onClick={store.reset} as='h1'>Articles</Header>
      <Table celled>
        <TableHeader />
        <Table.Body>
          {articles.map(item =>
            <TableRow item={item} key={item.id} />)
          }
        </Table.Body>
      </Table>
    </React.Fragment>
  )
}

export default Articles

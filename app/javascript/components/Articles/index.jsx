import React from "react"
import PropTypes from "prop-types"
import { useObserver } from "mobx-react"
import { Header, Table, Button } from "semantic-ui-react"
import { useStores } from "../../utils/hooks"
import ArticleApi from "../../utils/ArticleApi"

const DestroyButton = ({id, collback}) => {
  return (
    <div>
      <Button
        negative
        size='mini'
        onClick={() => collback(id)}
      >
        Delete
      </Button>
    </div>
  )
}

const TableHeader = () => {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Text</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  )
}

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

const Articles = () => {
  const {store} = useStores();
  const articles = useObserver(() => store.articles)
  const api = new ArticleApi()

  return (
    <React.Fragment>
      <Header as='h1'>Articles</Header>
      <Table celled>
        <TableHeader />
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
    </React.Fragment>
  )
}

export default Articles

import React, { useEffect } from "react"
import { Provider } from "mobx-react"
import ArticleStore from "../../stores/ArticleStore"
import Articles from "../Articles"

export default ({ articles }) => {
  const store = new ArticleStore()

  useEffect(() => {
    store.setInitialData(articles)
  }, [])

  return (
    <Provider store={store}>
      <Articles />
    </Provider>
  )
}

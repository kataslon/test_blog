import React, { useEffect } from "react"
import { Provider } from "mobx-react"
import articleStore from "../../stores/articleStoreInstance"
import Articles from "../Articles"

export default ({ articles }) => {
  useEffect(() => {
    articleStore.setInitialData(articles)
  }, [])

  return (
    <Provider store={articleStore}>
      <Articles />
    </Provider>
  )
}

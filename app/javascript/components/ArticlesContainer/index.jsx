import React, { useEffect } from "react"
import { Provider } from "mobx-react"
import rootStore from "../../stores/rootStoreInstance"
import Articles from "../Articles"

export default (props) => {
  useEffect(() => {
    rootStore.setInitialData(props)
  }, [])

  return (
    <Provider store={rootStore}>
      <Articles />
    </Provider>
  )
}

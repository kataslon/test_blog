import { MobXProviderContext, useObserver } from 'mobx-react'
import { useContext } from 'react'

export const useStores = () => {
  return useContext(MobXProviderContext)
}

export const useArticles = () => {
  const {store} = useStores()
  return useObserver(() => store.articles)
}

import consumer from './consumer'
import rootStore from "../stores/rootStoreInstance"

consumer.subscriptions.create('ArticlesChannel', {
  received(data) {
    rootStore.articleStore.destroyArticle(data.articleId)
  }
})

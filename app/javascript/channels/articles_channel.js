import consumer from './consumer'
import articleStore from "../stores/articleStoreInstance"

consumer.subscriptions.create('ArticlesChannel', {
  received(data) {
    articleStore.destroyArticle(data.articleId)
  }
})

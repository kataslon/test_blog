import { action, toJS } from 'mobx'
import ArticleStore from './ArticleStore'
import FilterStore from './FilterStore'
import ArticleApi from '../utils/ArticleApi'

class RootStore {
  constructor() {
    this.filterStore = new FilterStore()
    this.articleStore = new ArticleStore({root: this})
    this.api = new ArticleApi()
  }

  setInitialData = (data) => {
    this.articleStore.setData(data)
  }

  fetchArticlesWithParams = (params) => {
    this.filterStore.setParams(params)
    this.api.fetchArticles(this.filterStore.stringParams)
      .then(articles => {
        this.articleStore.setData(articles)
      })
  }
}

export default RootStore

import { action } from 'mobx'
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

  handleSearchByName = (string) => {
    this.fetchArticlesWithParams(['name', string])
  }

  handleSearchByText = (string) => {
    this.fetchArticlesWithParams(['text', string])
  }

  handleGrouping = (string) => {
    this.fetchArticlesWithParams(['group_param', string])
  }

  @action
  fetchArticlesWithParams = (param) => {
    this.filterStore.setParam(param)
    this.api.fetchArticles(this.filterStore.stringParams)
      .then(articles => {
        this.articleStore.setData(articles)
      })
  }
}

export default RootStore

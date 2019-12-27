import * as R from 'ramda'
import { observable, action, computed, toJS } from 'mobx'
import ArticleApi from '../utils/ArticleApi'

class ArticleStore {
  @observable articles = [];

  constructor({root}) {
    this.api = new ArticleApi()
    this.filters = root.filterStore
  }

  @action
  setData = ({articles}) => { this.articles = articles }

  @action
  destroyArticle = (id) => {
    if (this.isArray) {
      this.articles = this.articles.filter(item => item.id !== id)
    } else {
      const filteredList = {}
      for (const key in this.articles) {
        filteredList[key] = this.articles[key].filter(item => item.id !== id)
      }
      this.articles = filteredList
    }
  }

  @computed
  get isArray() {
    return Object.prototype.toString.call(this.articles) === '[object Array]'
  }

  @computed
  get filteredArticles() {
    if (this.isArray) {
      const sorted = R.sortBy(R.prop(this.filters.params.column))(this.articles)
      return this.filters.params.direction === 'ascending' ? sorted : sorted.reverse()
    } else if (this.filters.params.group_param === 'story') {
      return this.articles
    }
    const sortedList = {}
    for (const key in this.articles) {
      const sorted = R.sortBy(R.prop(this.filters.params.column))(this.articles[key])
      sortedList[key] = this.filters.params.direction === 'ascending' ? sorted : sorted.reverse()
    }
    return sortedList
  }
}

export default ArticleStore

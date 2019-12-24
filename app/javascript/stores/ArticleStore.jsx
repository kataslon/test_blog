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
    this.articles = toJS(this.articles).filter(item => item.id !== id)
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
    } else {
      return this.articles
    }
  }
}

export default ArticleStore

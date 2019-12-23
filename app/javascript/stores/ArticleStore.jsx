import _ from 'lodash'
import { observable, action, computed, toJS } from 'mobx'
import ArticleApi from '../utils/ArticleApi'

class ArticleStore {
  @observable articles = [];

  constructor({root}) {
    this.api = new ArticleApi()
    this.filters = root.filterStore
  }

  @action
  setInitialData = ({articles}) => { this.articles = articles }

  @action
  destroyArticle = (id) => {
    this.articles = toJS(this.articles).filter(item => item.id !== id)
  }

  @computed
  get filteredArticles() {
    const sorted = _.sortBy(this.articles, [this.filters.params.column])
    return this.filters.params.direction === 'ascending' ? sorted : sorted.reverse()
  }
}

export default ArticleStore

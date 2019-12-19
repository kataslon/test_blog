import { observable, action, toJS } from 'mobx'
import ArticleApi from '../utils/ArticleApi'

class ArticleStore {
  @observable articles = [];

  constructor() {
    this.api = new ArticleApi();
  }

  @action
  setInitialData = (articles) => { this.articles = articles }

  @action
  destroyArticle = (id) => {
    this.articles = toJS(this.articles).filter(item => item.id !== id)
  }
}

export default ArticleStore;

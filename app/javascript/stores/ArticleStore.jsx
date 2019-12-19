import { observable, action } from 'mobx'
import ArticleApi from '../utils/ArticleApi'

class ArticleStore {
  @observable articles = [];
  @observable filterParams = {};

  constructor() {
    this.api = new ArticleApi();
  }

  @action
  setInitialData = (articles) => { this.articles = articles }

  @action
  destroyArticle = (id) => {
    this.api.destroyArticle(id, this.filterParams)
  }
}

export default ArticleStore;

import { observable, action } from "mobx"

class ArticleStore {
  @observable articles = [];

  @action
  setInitialData = (articles) => { this.articles = articles }

  @action
  reset = () => { this.articles = [] }
}

export default ArticleStore;

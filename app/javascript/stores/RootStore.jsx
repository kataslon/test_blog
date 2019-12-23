import ArticleStore from './ArticleStore'
import FilterStore from './FilterStore'

class RootStore {
  constructor() {
    this.filterStore = new FilterStore();
    this.articleStore = new ArticleStore({root: this});
  }

  setInitialData = (data) => {
    this.articleStore.setInitialData(data)
  }
}

export default RootStore;

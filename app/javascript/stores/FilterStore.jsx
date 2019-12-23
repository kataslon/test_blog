import { observable, action } from 'mobx'

class FilterStore {
  @observable params = {column: null, direction: 'ascending'};

  @action
  setParams = (params) => { this.params = params }
}

export default FilterStore;

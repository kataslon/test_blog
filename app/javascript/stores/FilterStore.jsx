import { observable, action, computed, toJS } from 'mobx'

class FilterStore {
  @observable params = {column: null, direction: 'ascending'};

  @action
  setParams = (param) => {
    const item = Object.entries(param)[0]
    this.params[item[0]] = item[1]
  }

  @computed
  get stringParams() {
    return Object.entries(toJS(this.params)).map(item => item[0] + '=' + item[1]).join('&')
  }
}

export default FilterStore

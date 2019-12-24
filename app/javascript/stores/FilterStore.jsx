import { observable, action, computed, toJS } from 'mobx'

class FilterStore {
  @observable params = {column: null, direction: 'ascending'};

  @action
  setParam = ([name, value]) => {
    if (value === 'not grouped') {
      value = null
    }
    this.params = {...this.params, [name]: value }
  }

  @action
  setSortParams = (params) => {
    this.params = {...this.params, ...params}
  }

  @computed
  get stringParams() {
    return Object.entries(toJS(this.params))
      .filter(item => item[1])
      .map(item => item[0] + '=' + item[1]).join('&')
  }
}

export default FilterStore

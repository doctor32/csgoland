import { createStore } from 'vuex'
import itemslist from './items.js'

export default createStore({
  state: {
    items: itemslist,
    sortedItems: null,
    itemsPagination: null,
    domainName: 'Skinchar',
    openModal: false
  },
  mutations: {
    SORT__ITEMS(state, typeOfItems) {
      state.sortedItems = state.items.filter(item => item.type === typeOfItems)
    },
    PAGINATION(state, index) {
      state.itemsPagination = state.sortedItems.slice(index, index + 3)
    }
  },
  actions: {
  },
  getters: {
  },
  
})

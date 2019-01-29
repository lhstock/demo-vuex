import state from './state'
export default {
  loadNavigation ({commit, state, getters}, arrNavigation) {
    commit('arrNavigation', arrNavigation)
  },
  // clickNavigation ({commit, state, getters}, index) {
  //   let total = state.totalOfClick
  //   if (!total[state.arrNavigation[index].content]) {
  //     total[state.arrNavigation[index].content] = 1
  //   } else {
  //     total[state.arrNavigation[index].content]++
  //   }
  // },
  clickNavigation ({commit, state, getters}, index) {
    let obj = {}
    let old = state.totalOfClick
    let key = state.arrNavigation[index].content
    if (old[key]) {
      obj[key] = old[key] + 1
    } else {
      obj[key] = 1
    }
    commit('activeIndex', index)
    commit('totalOfClick', obj)
  },

  clearNav ({commit, state, getters}) {
    commit('arrNavigation', state.arrNavigation)
    commit('totalOfNav', state.totalOfNav)
  }
}

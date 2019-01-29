export default {
  arrNavigation (state, arr) {
    state.arrNavigation = arr
  },
  totalOfNav (state, obj) {
    state.totalOfNav = obj
  },
  totalOfClick (state, obj) {
    state.totalOfClick = {...state.totalOfClick, ...obj}
  },
  activeIndex (state, index) {
    state.activeIndex = index
  }

}

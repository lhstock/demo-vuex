let getters = {
  arrNavigation: state => {
    return state.arrNavigation.map(d => {
      return {Link: d.link, Content: d.content}
    })
  },
  totalNav: state => {
    return state.arrNavigation.length
  },
  activeOfUrl: state => {
    return state.arrNavigation[state.activeIndex].link
  }
}
export default getters

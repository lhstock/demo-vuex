let getters = {
  arrNavigation: state => {
    return state.arrNavigation.map(d => {
      return {Link: d.link, Content: d.content}
    })
  },
  totalNav: state => {
    return state.arrNavigation.length
  }
}
export default getters

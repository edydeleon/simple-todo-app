export const state = () => ({
  themeColor: 'yellow',
  themeColors: [
    { color: 'red' },
    { color: 'orange' },
    { color: 'yellow' },
    { color: 'green' },
    { color: 'blue' },
    { color: 'purple' }
  ],
  toDoList: [
    {listItem: 'This is an example'}
  ]
})

export const actions = {
  addToDoItem ({commit}, item) {
    commit('addToDoItem', item)
  },
  removeToDoItem ({commit}, item) {
    commit('removeToDoItem', item)
  },
  changeThemeColor ({commit}, color) {
    commit('changeThemeColor', color)
  }
}

export const mutations = {
  addToDoItem (state, item) {
    if (item === '' || item == null) {
      return
    }
    let newItem = {listItem: item}
    state.toDoList.push(newItem)
  },
  removeToDoItem (state, index) {
    state.toDoList.splice(index, 1)
  },
  changeThemeColor (state, color) {
    state.themeColor = color
  }
}

export const getters = {
  getToDoList (state) {
    return state.toDoList
  },
  getThemeColor (state) {
    return state.themeColor
  },
  getThemeColors (state) {
    return state.themeColors
  }
}

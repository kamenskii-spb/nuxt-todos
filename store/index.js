
export const actions = {
  async nuxtServerInit ({ dispatch, commit }) {
    await dispatch('todos/fetchTodos')
  }
}
export const mutations = {}

export const getters = {
}

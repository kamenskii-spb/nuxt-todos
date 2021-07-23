export const state = () => ({
  todos: []
})

export const mutations = {
  setTodos (state, todos) {
    state.todos = todos
  }
}

export const actions = {
  async fetchTodos ({ commit }) {
    try {
      const todos = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos')
      commit('setTodos', todos)
    } catch (e) {
      console.log(e)
    }
  }
}

export const getters = {
  todos: state => state.todos
}

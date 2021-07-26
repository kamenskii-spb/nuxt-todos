export default {
  namespaced: true,
  state () {
    return {
      todos: [],
      loading: false
    }
  },
  mutations: {
    setTodos (state, todos) {
      state.todos = todos
    },
    setLoading (state, status) {
      state.loading = status
    }
  },
  actions: {
    async load ({ commit, rootState }, noExecutor = false) {
      try {
        const todos = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos').then((data) => {
          if (noExecutor) {
            return data.filter((t) => {
              const user = rootState.users.users.find(u => u.userId === t.userId)
              return !user ? t : false
            })
          }

          data.map((t) => {
            const user = rootState.users.users.find(u => u.userId === t.userId)
            t.user = {
              executorImg: user ? user.image : '',
              executorName: user ? user.name : 'Испольнитель не задан'
            }
            return t
          })

          if (!rootState.users.chekedUserId.length) { return data }
          return data.filter((t) => {
            const user = rootState.users.chekedUserId.find((id) => {
              return id === t.userId
            })
            return user ? t : false
          })
        })

        commit('setTodos', todos)
      } catch (e) {
        console.log(e)
      }
    },
    async loadOne (_, id) {
      try {
        const todo = await this.$axios.$get(`https://jsonplaceholder.typicode.com/todos?id=${id}`)
        return todo.length ? todo[0] : false
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    todos (state) {
      return state.todos
    },
    loading (state) {
      return state.loading
    }
  }

}

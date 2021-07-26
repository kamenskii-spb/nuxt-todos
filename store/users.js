
export default {
  namespaced: true,
  state () {
    return {
      users: [
        {
          name: 'Сара',
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          userId: 1
        },
        {
          name: 'Василий',
          image: 'https://www.tailwind-kit.com/images/person/1.jpg',
          userId: 2
        },
        {
          name: 'Ельвира',
          image: 'https://www.tailwind-kit.com/images/person/7.jpg',
          userId: 3
        },
        {
          name: 'Виктория',
          image: 'https://www.tailwind-kit.com/images/person/4.jpg',
          userId: 4
        },
        {
          name: 'Майкл',
          image:
            'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
          userId: 5
        }
      ],
      chekedUserId: []
    }
  },
  mutations: {
    checkedUserId (state, id) {
      const idx = state.chekedUserId.findIndex(userId => userId === id)
      if (idx === -1) {
        state.chekedUserId.push(id)
      } else {
        state.chekedUserId.splice(idx, 1)
      }
    },
    clearCheckedUserId (state) {
      state.chekedUserId = []
    }
  },
  actions: {
    loadOne ({ commit }, id) {
      try {
        return this.state.users.users.find(u => u.userId === id)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    users: state => state.users,
    chekedUserId: state => state.chekedUserId
  }
}

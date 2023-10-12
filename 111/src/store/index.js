import { createStore } from 'vuex'

debugger
export default createStore({
  state: {
    age: 1
  },
  getters: {
    age(state) {
      return state.age + 2
    }
  },
  // 唯一修改状态的地方
  mutations: {
    add(state, payload) {

      state.age += payload
    }
  },
  actions: {
    add({ commit }, payload) {

      setTimeout(() => {
        commit.call(this, 'add', payload)
      }, 1000)
    }
  },
  modules: {
    a: {
      namespaced: true,
      state: {
        age: 11
      },
      mutations: {
        add(state, payload) {

          state.age += payload
        }
      },
      actions: {
        add({ commit }, payload) {
          setTimeout(() => {
            commit('add', payload)
          }, 1000)
        }
      },
      modules: {
        b: {
          namespaced: true,
          state: {
            age: 12
          },
          mutations: {
            add(state, payload) {
              state.age += payload
            }
          },
          actions: {
            add({ commit }, payload) {
              setTimeout(() => {
                commit('add', payload)
              }, 1000)
            }
          }
        }
      }
    }
  }
})

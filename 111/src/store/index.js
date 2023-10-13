import { createStore } from '../../../vuex.esm-browser'


export default createStore({
  state: {
    age: 1,
    age2: 2
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
    },
    add2(state, payload) {

      state.age2 += payload
    }
  },
  actions: {
    add1({ commit }, payload) {
      console.log(this)
      setTimeout(() => {

        commit('add2', payload)
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
        add1({ commit }, payload) {

          let that = this
          console.log(this)
          setTimeout(() => {
            commit.call(that, 'add', payload)
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

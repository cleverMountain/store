export default function installModule(store, rootState, path, module) {

  if (path.length === 0) {
    store.state = rootState
  } else {
    // 确定父子关系
    let key = path[path.length - 1]
    let parent = path.slice(0, -1).reduce((pre, cur) => {
      pre = pre[cur]
      return pre
    }, store.state)
    parent[key] = rootState
  }
  module.forEachMutation((mutation, key) => {
    registerMutation(store, key, mutation, store.state, path)
  })
  module.forEachAction((action, key) => {
    registerAction(store, key, action, store, path)
  })
  module.forEachChild((child, key) => {
    installModule(store, child.state, path.concat(key), child)
  })

}

function registerMutation(store, type, handler, state, path) {
  path = path.reduce((pre, cur) => {
    pre +=  cur + '/'
    return pre
  }, '')
  if (path) {
    type = path + type
  }
  // 添加处理函数
  const entry = store._mutations[type] || (store._mutations[type] = [])
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, state, payload)
  })
}

function registerAction(store, type, handler, state, path) {
  path = path.reduce((pre, cur) => {
    pre +=  cur + '/'
    return pre
  }, '')
  if (path) {
    type = path + type
  }
  // 添加处理函数
  const entry = store._actions[type] || (store._actions[type] = [])
  entry.push(function wrappedActionHandler(payload) {
    handler.call(store, state, payload)
  })
}
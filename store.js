// @ts-nocheck
import ModuleCollection from './module/module-collection.js'
import installModule from "./module/module-install.js"

export function createStore(options) {
  return new Store(options)
}

let that
export class Store {
  constructor(options) {
    this._actions = Object.create(null)
    this._mutations = Object.create(null)
    this._wrappedGetters = Object.create(null)
    // 收集modules
    this._modules = new ModuleCollection(options)
    const state = this._modules.root.state // 顶层state
    const module = this._modules.root // 顶层module
    // 安装modules
    installModule(this, state, [], module)
    this.registerPlugin(options)
    that = this
  }
  commit(key, payload) {
    that._mutations[key].forEach(cb => {
      cb(payload)
    })
  }
  dispatch(key, payload) {
    console.log(this._actions[key])
    that._actions[key].forEach(cb => {
      cb.call(this, payload)
    })
  }
  registerPlugin(options) {
    if (!options.plugins) return
    options.plugins.forEach(plugin => {
      plugin.call(this, this)
    })
  }
}

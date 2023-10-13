import { forEachValue } from "../utils.js"

export default class Module {
  constructor(rawModule) {
    this._children = Object.create(null)
    this._rawModule = rawModule
    const rawState = rawModule.state

    // Store the origin module's state
    this.state = (typeof rawState === 'function' ? rawState() : rawState) || {}
  }
  addChild(key, module) {
    this._children[key] = module
  }
  getChild(key) {
    return this._children[key]
  }
  forEachMutation(fn) {
    const mutations = this._rawModule.mutations
    if (mutations) {
      forEachValue(mutations, fn)
    }
  }
  forEachAction(fn) {
    const actions = this._rawModule.actions
    if (actions) {
      forEachValue(actions, fn)
    }
  }
  forEachChild(fn) {
    forEachValue(this._children, fn)
  }
}
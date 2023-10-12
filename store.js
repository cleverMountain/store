// @ts-nocheck
import ModuleCollection from './module/module-collection.js'

export function createStore(options) {
  return new Store(options)
}


export class Store {
  constructor(options) {
    this._actions = Object.create(null)
    this._mutations = Object.create(null)
    this._wrappedGetters = Object.create(null)
    this._modules = new ModuleCollection(options)
  }
}

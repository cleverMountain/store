// @ts-nocheck
import Module from './index.js'

export default class ModuleCollection {
  constructor(rawRootModule) {
    debugger
    this.register([], rawRootModule)
  }
  register(path, rawModule) {
    const newModule = new Module(rawModule)
  }
}
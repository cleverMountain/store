// @ts-nocheck
import Module from './index.js'

export default class ModuleCollection {
  constructor(rawRootModule) {
    this.root = null // 根module
    this.register([], rawRootModule)
  }
  getNamespace(path) {
    let module = this.root
    return path.reduce((namespace, key) => {
      module = module.getChild(key)
      return namespace + (module.namespaced ? key + '/' : '')
    }, '')
  }
  // 获取父模块
  getParnet(path) {
    // 方式1
    // if (path.length === 1) {
    //   return this.root
    // } else {
    //   let root = this.root
    //   while(path.length > 1) {
    //     const key = path.shift()
    //     root = root._children[key]
    //   }
    //   return root
    // }
    // 方式2
    path = path.slice(0, -1)
    return path.reduce((module, key) => {
      return module.getChild(key)
    }, this.root)
  }
  // 注册模块,path路径
  register(path, rawModule) {
    const newModule = new Module(rawModule)

    if (path.length === 0) {
      // 根modules
      this.root = newModule
    } else {
      const parent = this.getParnet(path)
      const key = path[path.length - 1]
      parent.addChild(key, newModule)
    }
    // 如果子模块存在
    if (rawModule.modules) {
      Object.keys(rawModule.modules).forEach((key) => {
        this.register(path.concat(key), rawModule.modules[key])
      })
    }
  }
}
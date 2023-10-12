export default class Module{
  constructor (rawModule) {
    this._children = Object.create(null)
    this._rawModule = rawModule
    const rawState = rawModule.state

    // Store the origin module's state
    this.state = (typeof rawState === 'function' ? rawState() : rawState) || {}
  }
}
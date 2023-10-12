import { Store, createStore } from './store.js'
import { storeKey, useStore } from './injectKey.js'
import { mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers } from './helpers.js'
import { createLogger } from './plugins/logger.js'

export default {
  version: '__VERSION__',
  Store,
  storeKey,
  createStore,
  useStore,
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers,
  createLogger
}

export {
  Store,
  storeKey,
  createStore,
  useStore,
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers,
  createLogger
}

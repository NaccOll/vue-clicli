import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import {sync} from 'vuex-router-sync'

import App from './app.vue'
import createRouter from './router'
import createStore from './store/index'

import 'common/stylus/reset.styl'
import 'common/stylus/index.styl'
import 'common/stylus/responsive.styl'



Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.ignoredElements = [
  'e-player'
]

export default () => {
  const router = createRouter()
  const store = createStore()
  sync(store, router)
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return {app, router, store}
}
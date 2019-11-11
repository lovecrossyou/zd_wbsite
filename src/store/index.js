import Vue from 'vue'
import Vuex from 'vuex'
import navTabStore from './modules/navtab'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    navTabStore,
  },
  strict: debug,
})
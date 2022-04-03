import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import plugins from './plugins';


Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

//create store
const store = new Vuex.Store({
  strict:  process.env.NODE_ENV !== 'production',
  modules,
  plugins
})

export default store;
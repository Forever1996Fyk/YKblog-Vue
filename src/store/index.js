import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from '@/store/modules/user'
import app from '@/store/modules/app'
import errorLog from '@/store/modules/errorLog'
import permission from '@/store/modules/permission'
import tagsView from '@/store/modules/tagsView'
import settings from '@/store/modules/settings'
import socket from '@/store/modules/socket'

Vue.use(Vuex)

// // https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = require.context('./modules', true, /\.js$/)
//
// // you do not need `import app from './modules/app'`
// // it will auto require all vuex module from modules file
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})

const store = new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    errorLog,
    permission,
    tagsView,
    settings,
    socket
  },
  getters
})

export default store

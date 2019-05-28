// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import Head from './components/index.js'
import $ from 'jquery'
import {fetch,post,patch,put} from './components/http.js'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Head)

Vue.prototype.ajax=Axios
Vue.prototype.$fetch=fetch
Vue.prototype.$post=post
Vue.prototype.$patch=patch
Vue.prototype.$put=put
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

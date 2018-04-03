// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store.js'
import App from './App'
import router from './router'
import API from '../config/httpUrl'
import {fetch, post} from './axios';
Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.prototype.API = API;
Vue.prototype.$get = fetch;
Vue.prototype.$post = post;
/* eslint-disable no-new */
new Vue({el: '#app', router, store, components: {
    App
  }, template: '<App/>'})

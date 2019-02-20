// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import devtools from '@vue/devtools';
if (process.env.NODE_ENV === 'development') {
  devtools.connect(
    'http://localhost',
    '8098'
  );
}
import Vue from 'vue';
// import Vuex from 'vuex'
import router from '@/router';
import api from '@/api';
import App from './App';
import util from '@/utils/util.js';

Vue.use(router);

Vue.config.productionTip = false;
Vue.prototype.$eventBus = new Vue();
//所有获取数据的地方
Vue.prototype.$api = api;
//工具类函数
Vue.prototype.$util = util;

new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: "<App/>"
  render: h => h(App)
});

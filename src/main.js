// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import axios from 'axios';
import VueAxios from 'vue-axios';
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
/*import '../static/awesome/css/font-awesome.min.css'*/
Vue.prototype.$http = axios; // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等

Vue.use(MuseUI);
Vue.use(VueAxios,axios);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    store,
  template: '<App/>',
  components: { App }
});

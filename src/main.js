import Vue from 'vue'
import App from './App.vue'
import router from './route/index'
import store from './store/index'
import Service from './service/index'
import './assets/scss/style.scss'
import 'lib-flexible'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
import Helper from './helper'
import VueCountdown from '@xkeshi/vue-countdown';
 
Vue.component(VueCountdown.name, VueCountdown);
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
import VVideo from 'vue-videojs'
Vue.use(VVideo);


Vue.use(YDUI);
Vue.use(Service);
Vue.use(Helper)
Vue.config.productionTip = false

document.body.addEventListener('touchstart',()=>{})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
